import { useEffect } from 'react';
import { SITE_CONTENT } from '../content';

const Contact = () => {
  useEffect(() => {
    document.title = `Contact - ${SITE_CONTENT.brand.businessName}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Contact us for trash can cleaning services.');
  }, []);

  return (
    <main>
      <div className="container">
        <h1>Contact Us</h1>
        <section>
          <h2>Get in Touch</h2>
          <p>Phone: <a href={`tel:${SITE_CONTENT.contact.phone}`}>{SITE_CONTENT.contact.phone}</a></p>
          <p>Text: <a href={`sms:${SITE_CONTENT.contact.text}`}>{SITE_CONTENT.contact.text}</a></p>
          <p>Email: <a href={`mailto:${SITE_CONTENT.contact.email}`}>{SITE_CONTENT.contact.email}</a></p>
        </section>
        <section>
          <h2>Request a Quote</h2>
          <form action={SITE_CONTENT.contact.formspreeEndpoint} method="POST">
            {SITE_CONTENT.contact.formFields.map((field, i) => (
              <div key={i} className="form-group">
                <label htmlFor={field.name}>{field.label}{field.required ? ' *' : ''}</label>
                {field.type === 'textarea' ? (
                  <textarea id={field.name} name={field.name} required={field.required}></textarea>
                ) : (
                  <input type={field.type} id={field.name} name={field.name} required={field.required} />
                )}
              </div>
            ))}
            <button type="submit" className="btn primary">Send Quote Request</button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;