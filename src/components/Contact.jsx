import { Reveal } from './ui.jsx';

export default function Contact() {
  return (
    <section className="block" id="contact">
      <div className="wrap">
        <Reveal><p className="sec-eyebrow" style={{ textAlign: 'center' }}>05 — Contact</p></Reveal>
        <Reveal delay={0.1}><h2 className="big">Imagine more<br />with me.</h2></Reveal>
        <Reveal delay={0.2}>
          <p><a className="btn-red" href="mailto:steviebez@gmail.com">steviebez@gmail.com</a></p>
        </Reveal>
        <Reveal delay={0.25}>
          <form className="mini" name="contact" method="POST" data-netlify="true">
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" rows="4" placeholder="What are we making?" required />
            <button className="btn-red" type="submit">Send →</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
