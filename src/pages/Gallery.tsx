import { useEffect } from 'react';
import { SITE_CONTENT } from '../content';

const Gallery = () => {
  useEffect(() => {
    document.title = `Gallery - ${SITE_CONTENT.brand.businessName}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'View our trash can cleaning service gallery and before/after photos.');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const images = SITE_CONTENT.images;
  const basePath = (import.meta.env.BASE_URL || '').replace(/\/$/, '');
  const toResizedPath = (img: string) => {
    const fileName = img.split('/').filter(Boolean).pop() ?? img;
    return `${basePath}/resized/gallery/${fileName}`;
  };

  return (
    <main>
      <div className="container">
        <h1>Gallery</h1>
        <p>View our professional trash can cleaning services in action.</p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={toResizedPath(image)} 
                alt={`Gallery image ${index + 1}`} 
                onError={(e) => {
                  console.error(`Failed to load gallery image: ${image}`);
                  e.currentTarget.src = 'https://via.placeholder.com/300x250?text=Image+Not+Found';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
