import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <span className="section-label">06 / CONTACT</span>

          <h2>
            Let's build
            <span className="gradient-text"> something great.</span>
          </h2>

          <p>
            I'm open to internship opportunities, entry-level roles,
            collaborations, and interesting projects involving AI/ML
            and full-stack development.
          </p>

          <div className="contact-details">
            <a
              href="mailto:saivineethanayak@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>Email</span>
                <strong>saivineethanayak@gmail.com</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <span>Location</span>
                <strong>Hyderabad, India</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">
            <Send size={24} />
          </div>

          <h3>Have an opportunity?</h3>

          <p>
            I'd love to hear about it. Feel free to reach out
            and let's start a conversation.
          </p>

          <a
            href="mailto:saivineethanayak@gmail.com"
            className="btn btn-primary contact-button"
          >
            Get In Touch
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;