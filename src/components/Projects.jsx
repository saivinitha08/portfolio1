import {
  ArrowUpRight,
  BrainCircuit,
  GraduationCap,
  Layers3,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI Self-Tutoring Platform",
    category: "AI / FULL STACK",
    description:
      "An AI-powered self-learning platform that provides personalized study plans, real-time doubt resolution, adaptive quizzes, progress tracking, and intelligent learning recommendations.",
    tech: ["React.js", "Python", "FastAPI", "NLP", "RAG", "LLMs"],
    icon: BrainCircuit,
    featured: true,
  },
  {
    number: "02",
    title: "Intellectus",
    category: "AI CLASSROOM",
    description:
      "An AI-powered virtual learning platform that converts lecture content into structured notes, key concepts, quizzes, explanations, and useful learning insights.",
    tech: ["React.js", "Python", "Whisper", "Ollama", "AI/ML"],
    icon: GraduationCap,
    featured: false,
  },
  {
    number: "03",
    title: "Developer Portfolio",
    category: "WEB DEVELOPMENT",
    description:
      "A modern responsive portfolio website designed to showcase my technical skills, projects, education, and development journey with smooth animations.",
    tech: ["React", "Vite", "JavaScript", "CSS", "Responsive UI"],
    icon: Layers3,
    featured: false,
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <div>
          <span className="section-label">03 / PROJECTS</span>
          <h2>
            Things I've
            <span className="gradient-text"> built.</span>
          </h2>
        </div>

        <p>
          A selection of projects where I combined development,
          artificial intelligence, and problem-solving.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.number}
            >
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-icon">
                  <Icon size={24} />
                </div>
              </div>

              <div className="project-category">
                {project.category}
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href="#contact"
                  className="project-link"
                >
                  Discuss Project
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="#home"
                  className="project-link secondary-link"
                >
                  <ExternalLink size={16} />
                  Explore
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;