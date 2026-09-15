import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Hero", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Journey", id: "journey" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <button
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          <span className="logo-mark">&lt;/&gt;</span>
          <span>Sai<span>Vineetha</span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </button>
          ))}

          <button
            className="nav-contact"
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
          </button>
        </nav>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;