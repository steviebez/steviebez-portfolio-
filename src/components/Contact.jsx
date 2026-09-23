import { Reveal } from './ui.jsx';
import { siteConfig } from '../../config/site.config';

const contact = siteConfig.sections.find((s) => s.id === 'contact');

export default function Contact() {
  if (!contact || !contact.enabled) return null;
  const d = contact.delays;
  return (
    <section className="block contact" id="contact">
      <div className="wrap contact-head">
        <Reveal>
          <p className="contact-eyebrow">{contact.eyebrow}</p>
        </Reveal>
        <Reveal delay={d.title}>
          <h2 className="contact-title">{contact.title}</h2>
        </Reveal>
      </div>
      <div className="wrap contact-grid">
        <Reveal delay={d.photo}>
          <img
            className="contact-photo"
            src={contact.portrait}
            alt={contact.portraitAlt}
            loading="lazy"
            decoding="async"
          />
        </Reveal>
        <div className="contact-text">
          <Reveal delay={d.about}>
            <h3 className="contact-about">{contact.aboutTitle}</h3>
          </Reveal>
          <Reveal delay={d.body}>
            <p className="contact-body">{contact.body}</p>
          </Reveal>
          <Reveal delay={d.buttons}>
            <div className="contact-buttons">
              {contact.buttons.map((b) => (
                <a
                  key={b.label}
                  className={`contact-btn contact-btn-${b.style}`}
                  href={b.href}
                  {...(b.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
                >
                  {b.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
