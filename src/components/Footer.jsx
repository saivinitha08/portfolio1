function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <button
            className="logo"
            onClick={scrollTop}
          >
            <span className="logo-mark">&lt;/&gt;</span>
            <span>
              Sai<span>Vineetha</span>
            </span>
          </button>

          <p>
            Building ideas into intelligent digital experiences.
          </p>

        </div>

        <div className="footer-socials">

          <a
            href="https://github.com/saivinitha08"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="linkedin.com/in/badavath-sai-vinitha

"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:saivineethanayak@gmail.com"
          >
            Email
          </a>

        </div>

        <button
          className="back-top"
          onClick={scrollTop}
        >
          Back to top ↑
        </button>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 Sai Vineetha Nayak
        </span>

        <span>
          Designed & built with React
        </span>

      </div>

    </footer>
  );
}

export default Footer;