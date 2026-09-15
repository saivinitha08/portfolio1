import { GraduationCap, Award } from "lucide-react";

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-heading">
          <p>My Academic Journey</p>
          <h2>Education</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <GraduationCap size={24} />
            </div>

            <div className="timeline-content">
              <span className="timeline-date">2022 - 2026</span>

              <h3>B.Tech - Computer Science & Engineering</h3>

              <h4>
                Malla Reddy College of Engineering and Technology
              </h4>

              <p>
                Specialized in Computer Science with an interest in
                Artificial Intelligence, Machine Learning, Full Stack
                Development and emerging technologies.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <Award size={24} />
            </div>

            <div className="timeline-content">
              <span className="timeline-date">Academic Projects</span>

              <h3>AI & Full Stack Development</h3>

              <h4>Project Experience</h4>

              <p>
                Developed AI-powered applications using React.js, Python,
                FastAPI, NLP, RAG and Large Language Models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;