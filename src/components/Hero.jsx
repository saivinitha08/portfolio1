import {
  ArrowDown,
  ArrowRight,
  Code2,
  Sparkles,
  Terminal,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-kicker">
          <Sparkles size={16} />
          AI / ML × Full Stack
        </p>

        <h1>
          Hi, I'm
          <span className="gradient-text"> Badavath Sai Vinitha</span>
        </h1>

        <h2>
          I build intelligent digital experiences.
        </h2>

        <p className="hero-description">
          Computer Science graduate focused on AI/ML, full-stack development,
          NLP, RAG, and modern web technologies. I enjoy turning ideas into
          useful, scalable applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="btn btn-secondary">
            Let's Connect
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>AI/ML</strong>
            <span>Development</span>
          </div>

          <div>
            <strong>Full Stack</strong>
            <span>Development</span>
          </div>

          <div>
            <strong>React</strong>
            <span>Frontend</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-window">
          <div className="window-top">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="window-title">
              <Terminal size={14} />
              developer.js
            </div>
          </div>

          <div className="code-content">
            <p>
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">developer</span> = {"{"}
            </p>

            <p className="indent">
              <span className="code-green">name</span>:{" "}
              <span className="code-yellow">
                "Sai Vineetha Nayak"
              </span>
              ,
            </p>

            <p className="indent">
              <span className="code-green">role</span>:{" "}
              <span className="code-yellow">
                "AI/ML Developer"
              </span>
              ,
            </p>

            <p className="indent">
              <span className="code-green">skills</span>: [
            </p>

            <p className="indent-more">
              <span className="code-yellow">"React"</span>,
            </p>

            <p className="indent-more">
              <span className="code-yellow">"Python"</span>,
            </p>

            <p className="indent-more">
              <span className="code-yellow">"FastAPI"</span>,
            </p>

            <p className="indent-more">
              <span className="code-yellow">"NLP"</span>,
            </p>

            <p className="indent-more">
              <span className="code-yellow">"RAG"</span>
            </p>

            <p className="indent">
              ],
            </p>

            <p className="indent">
              <span className="code-green">passion</span>:{" "}
              <span className="code-yellow">
                "Building AI"
              </span>
            </p>

            <p>{"}"}</p>

            <p className="code-comment">
              // Ready to build something amazing 🚀
            </p>
          </div>
        </div>

        <div className="floating-card card-one">
          <Code2 size={18} />
          <div>
            <strong>Clean Code</strong>
            <span>Modern Development</span>
          </div>
        </div>

        <div className="floating-card card-two">
          <Sparkles size={18} />
          <div>
            <strong>AI Powered</strong>
            <span>Smart Solutions</span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

export default Hero;