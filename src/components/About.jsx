function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>
              Passionate about <span>Technology & Innovation</span>
            </h3>

            <p>
              I am a Computer Science student with a strong interest in
              Artificial Intelligence, Machine Learning and Full Stack
              Development.
            </p>

            <p>
              I enjoy creating practical applications that combine modern
              frontend technologies with intelligent AI systems. My goal is
              to develop solutions that are useful, scalable and easy to use.
            </p>

            <p>
              I have worked with technologies such as React.js, Python,
              FastAPI, NLP, RAG, LLMs, JavaScript, HTML, CSS and SQL.
            </p>

            <p>
              I am currently looking for opportunities where I can improve my
              technical skills, work on real-world projects and contribute to
              a professional development team.
            </p>
          </div>

          <div className="about-info">
            <div className="info-card">
              <span className="info-number">01</span>
              <h3>AI & ML</h3>
              <p>
                Building intelligent applications using AI, ML, NLP and LLMs.
              </p>
            </div>

            <div className="info-card">
              <span className="info-number">02</span>
              <h3>Web Development</h3>
              <p>
                Creating responsive and modern interfaces using React and
                JavaScript.
              </p>
            </div>

            <div className="info-card">
              <span className="info-number">03</span>
              <h3>Problem Solving</h3>
              <p>
                Enjoy solving technical problems and learning new
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;