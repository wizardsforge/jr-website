# Resizes all images in the public folder into square gallery thumbs (1:1)
# and 16:9 carousel assets. Outputs to public/resized/gallery and
# public/resized/carousel, preserving original filenames.

param(
  [int]$CarouselWidth = 1280,
  [int]$CarouselHeight = 720,
  [int]$GallerySize = 800
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$publicDir = Join-Path $PSScriptRoot 'public'
$carouselDir = Join-Path $publicDir 'resized\carousel'
$galleryDir = Join-Path $publicDir 'resized\gallery'

if (-not (Test-Path $publicDir)) {
  throw "Public folder not found at $publicDir"
}

$null = New-Item -ItemType Directory -Force -Path $carouselDir, $galleryDir

# WPF imaging gives reliable decode on the existing asset mix.
Add-Type -AssemblyName PresentationCore, WindowsBase

function Resize-Cover {
  param(
    [string]$Source,
    [string]$Dest,
    [int]$TargetW,
    [int]$TargetH
  )

  $fs = [System.IO.File]::OpenRead($Source)
  try {
    $decoder = [System.Windows.Media.Imaging.BitmapDecoder]::Create(
      $fs,
      [System.Windows.Media.Imaging.BitmapCreateOptions]::PreservePixelFormat,
      [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad
    )
    $frame = $decoder.Frames[0]
  } finally {
    $fs.Dispose()
  }

  $scale = [Math]::Max($TargetW / $frame.PixelWidth, $TargetH / $frame.PixelHeight)
  $transform = New-Object System.Windows.Media.ScaleTransform($scale, $scale)

  $scaledBmp = New-Object System.Windows.Media.Imaging.TransformedBitmap
  $scaledBmp.BeginInit()
  $scaledBmp.Source = $frame
  $scaledBmp.Transform = $transform
  $scaledBmp.EndInit()
  $scaledBmp.Freeze()

  $scaledW = [int]$scaledBmp.PixelWidth
  $scaledH = [int]$scaledBmp.PixelHeight

  $cropX = [int][Math]::Floor(($scaledW - $TargetW) / 2)
  $cropY = [int][Math]::Floor(($scaledH - $TargetH) / 2)
  if ($cropX -lt 0) { $cropX = 0 }
  if ($cropY -lt 0) { $cropY = 0 }

  $rect = New-Object System.Windows.Int32Rect(
    $cropX,
    $cropY,
    [Math]::Min($TargetW, $scaledW - $cropX),
    [Math]::Min($TargetH, $scaledH - $cropY)
  )

  $cropped = New-Object System.Windows.Media.Imaging.CroppedBitmap
  $cropped.BeginInit()
  $cropped.Source = $scaledBmp
  $cropped.SourceRect = $rect
  $cropped.EndInit()
  $cropped.Freeze()

  $ext = [System.IO.Path]::GetExtension($Dest).ToLower()
  if ($ext -eq '.png' -or $ext -eq '.webp') {
    $encoder = New-Object System.Windows.Media.Imaging.PngBitmapEncoder
  } else {
    $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
    $encoder.QualityLevel = 90
  }
  $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($cropped))

  $destDir = Split-Path $Dest
  if (-not (Test-Path $destDir)) { $null = New-Item -ItemType Directory -Force -Path $destDir }

  $outStream = [System.IO.File]::Open($Dest, [System.IO.FileMode]::Create)
  try {
    $encoder.Save($outStream)
  } finally {
    $outStream.Dispose()
  }
}

$imageExt = @('.jpg', '.jpeg', '.png', '.gif', '.webp')
$sourceFiles = Get-ChildItem -Path $publicDir -File -Recurse |
  Where-Object {
    $ext = $_.Extension.ToLower()
    $imageExt -contains $ext -and $_.FullName -notmatch '\\resized\\'
  }

foreach ($file in $sourceFiles) {
  try {
    Resize-Cover $file.FullName (Join-Path $carouselDir $file.Name) $CarouselWidth $CarouselHeight
    Resize-Cover $file.FullName (Join-Path $galleryDir $file.Name) $GallerySize $GallerySize
    Write-Host "Resized $($file.Name)"
  } catch {
    Write-Warning "Failed $($file.Name): $_"
  }
}
