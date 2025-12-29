# Stanley Cleaning Website

A React-based marketing website for residential trash can cleaning services in Schertz and Cibolo, TX, built with Vite and TypeScript.

## Features

- Responsive design with mobile-first approach
- React Router with HashRouter for GitHub Pages compatibility
- SEO optimized with meta tags and JSON-LD structured data
- Contact form integrated with Formspree
- Clean, fast CSS styling

## Pages

- Home: Hero, how it works, services overview, pricing teaser, guarantee
- Services: Service details, add-ons, frequency options, and full pricing
- FAQ: Accordion-style frequently asked questions
- Contact: Contact info and quote request form

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

### Configuration

- Update `src/content.ts` with your business information
- Set `VITE_BASE` environment variable for GitHub Pages base path (e.g., `/your-repo-name/`)
- Update Formspree endpoint in `src/content.ts`
- Replace placeholders in contact info and JSON-LD

### Deployment

1. Push to GitHub main branch
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as source
4. The workflow will automatically build and deploy

## Image Management

The website automatically uses all images placed in the `public/` folder for both the home page carousel and gallery page.

### Adding Images

1. **Place image files** in the `public/` folder
2. **Supported formats**: JPG, PNG, GIF, WebP
3. **Run the update script**: `npm run update-images`
4. **Or manually update** `src/content.ts` images array

### Automatic Image Detection

The system includes a script that automatically scans the `public/` folder and updates the image list:

```bash
npm run update-images
```

This script:
- ✅ Scans all files in `public/` folder
- ✅ Filters for image files (jpg, png, gif, webp)
- ✅ Updates `src/content.ts` with the current image list
- ✅ Maintains sorted order for consistency

### Current Images

Images are stored in `src/content.ts` under the `images` array and are used by:
- **Home page carousel** (randomized order)
- **Gallery page** (grid layout)

To add new images, simply drop them in `public/` and run `npm run update-images`.

## Customization

- Business information
- Services and pricing
- Contact details
- FAQ items
- SEO metadata

## Technologies

- React 18
- TypeScript
- Vite
- React Router DOM
- Formspree (for contact form)
```
