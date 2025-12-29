import { useEffect } from 'react';
import { SITE_CONTENT } from '../content';

const Services = () => {
  const formatFrequency = (text: string) => {
    const keywords = ['monthly', 'every other month', 'quarterly', 'one-time'];

    const titleCased = text
      .split(' ')
      .map((word) => {
        const clean = word.replace(/[^a-zA-Z-]/g, '');
        if (clean.length >= 4) {
          const [first, ...rest] = word;
          return `${first.toUpperCase()}${rest.join('')}`;
        }
        return word;
      })
      .join(' ');

    return keywords.reduce((result, keyword) => {
      const regex = new RegExp(keyword.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
      return result.replace(regex, (match) => `<strong>${match}</strong>`);
    }, titleCased);
  };

  useEffect(() => {
    document.title = `Services - ${SITE_CONTENT.brand.businessName}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Learn about our trash can cleaning services and options.');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <main className="services-page">
      <div className="container">
        <h1 className="services-title">Services</h1>

        <section className="service-block service-standard">
          <h2>{SITE_CONTENT.service.standardName}</h2>
          <p>{SITE_CONTENT.service.standardSummary}</p>
        </section>

        <section className="service-block service-included">
          <h2>What's Included</h2>
          <ul className="service-list">
            {SITE_CONTENT.service.included.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="service-block service-scheduling">
          <h2>Scheduling</h2>
          <p>Schedule service at anytime! We try to clean the day of or after trash pickup so bins are empty.</p>
        </section>

        <section className="service-block service-frequency">
          <h2>Frequency Options</h2>
          <ul className="service-list">
            {SITE_CONTENT.service.frequencyOptions.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatFrequency(item) }} />
            ))}
          </ul>
        </section>

        <section className="service-block service-pricing">
          <h2>Pricing</h2>
          <div className="pricing-groups">
            <div className="pricing-group-list">
              <h3>One-Time Services</h3>
              <ul className="pricing-list">
                {SITE_CONTENT.pricing.oneTime.map((plan, i) => (
                  <li key={i}>
                    <span className="pricing-label">{plan.label}</span>
                    <span className="pricing-value">{plan.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pricing-group-list">
              <h3>Subscriptions</h3>
              <ul className="pricing-list">
                {SITE_CONTENT.pricing.recurring.map((plan, i) => (
                  <li key={i}>
                    <span className="pricing-label">{plan.label}</span>
                    <span className="pricing-value">{plan.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="service-block service-addons">
          <h2>Add-Ons</h2>
          <ul className="service-list">
            {SITE_CONTENT.service.addOns.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="service-block service-notes">
          <h2>Notes</h2>
          <ul className="service-list notes-list">
            {SITE_CONTENT.pricing.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </section>

        <section className="service-block service-guarantee">
          <h2>{SITE_CONTENT.trust.guaranteeHeadline}</h2>
          <p>{SITE_CONTENT.trust.guaranteeText}</p>
        </section>
      </div>
    </main>
  );
};

export default Services;
