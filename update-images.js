import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function updateImageList() {
  const publicDir = path.join(__dirname, 'public');
  const contentFile = path.join(__dirname, 'src', 'content.ts');

  try {
    // Read all files in public directory
    const files = fs.readdirSync(publicDir);

    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const images = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map(file => `    "/${file}"`)
      .sort(); // Sort for consistency

    if (images.length === 0) {
      console.log('No images found in public folder');
      return;
    }

    // Read the content.ts file
    let content = fs.readFileSync(contentFile, 'utf8');

    // Find the images array and replace it
    const imagesStart = content.indexOf('  images: [');
    const imagesEnd = content.indexOf('  ],', imagesStart) + 4;

    if (imagesStart === -1 || imagesEnd === -1) {
      console.error('Could not find images array in content.ts');
      return;
    }

    const beforeImages = content.substring(0, imagesStart);
    const afterImages = content.substring(imagesEnd);

    // Create the new images array string
    const imagesArrayString = `  images: [
${images.join(',\n')}
  ],`;

    // Combine the parts
    content = beforeImages + imagesArrayString + afterImages;

    // Write back to file
    fs.writeFileSync(contentFile, content, 'utf8');

    console.log(`✅ Updated content.ts with ${images.length} images:`);
    images.forEach(img => console.log(`  ${img.trim()}`));

  } catch (error) {
    console.error('❌ Error updating image list:', error.message);
  }
}

// Run the update
updateImageList();
