import { useEffect, useState } from 'react';
import { SITE_CONTENT } from '../content';

const FAQ = () => {
  useEffect(() => {
    document.title = `FAQ - ${SITE_CONTENT.brand.businessName}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Frequently asked questions about our trash can cleaning services.');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <div className="container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="accordion faq-accordion">
          {SITE_CONTENT.faq.map((item, i) => (
            <div key={i} className="accordion-item">
              <button className="accordion-header" onClick={() => toggle(i)}>
                {item.q}
              </button>
              {openIndex === i && (
                <div className="accordion-content">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQ;
