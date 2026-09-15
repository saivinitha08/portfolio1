import {
  BrainCircuit,
  Code2,
  Database,
  Globe,
  Wrench,
  Sparkles,
  Cpu,
  Terminal,
} from "lucide-react";

const categories = [
  {
    id: "01",
    title: "Programming",
    subtitle: "Languages I build with",
    icon: Code2,
    skills: [
      { name: "Python", level: "Advanced", featured: true },
      { name: "Java", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate", featured: true },
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
    ],
  },
  {
    id: "02",
    title: "AI & Machine Learning",
    subtitle: "My core area of interest",
    icon: BrainCircuit,
    featured: true,
    skills: [
      { name: "Machine Learning", level: "Strong" },
      { name: "NLP", level: "Strong" },
      { name: "RAG", level: "Strong" },
      { name: "LLMs", level: "Strong" },
      { name: "Whisper", level: "Working" },
      { name: "Ollama", level: "Working" },
    ],
  },
  {
    id: "03",
    title: "Frontend",
    subtitle: "Building modern interfaces",
    icon: Globe,
    skills: [
      { name: "React.js", level: "Advanced", featured: true },
      { name: "JavaScript", level: "Advanced" },
      { name: "Responsive Design", level: "Strong" },
      { name: "UI Development", level: "Strong" },
    ],
  },
  {
    id: "04",
    title: "Backend & Database",
    subtitle: "Building application logic",
    icon: Database,
    skills: [
      { name: "FastAPI", level: "Strong" },
      { name: "REST APIs", level: "Strong" },
      { name: "MongoDB", level: "Working" },
      { name: "SQL", level: "Working" },
    ],
  },
  {
    id: "05",
    title: "Developer Tools",
    subtitle: "Tools I use every day",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Strong" },
      { name: "GitHub", level: "Strong" },
      { name: "VS Code", level: "Advanced" },
      { name: "Vite", level: "Working" },
      { name: "Postman", level: "Working" },
    ],
  },
];

function SkillItem({ skill }) {
  return (
    <div className={`skill-dashboard-item ${skill.featured ? "featured" : ""}`}>
      <div className="skill-dashboard-dot"></div>

      <div className="skill-dashboard-name">
        {skill.name}
      </div>

      <span className="skill-dashboard-level">
        {skill.level}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <section className="section skills-dashboard" id="skills">
      {/* HEADER */}
      <div className="skills-dashboard-heading">
        <div>
          <span className="section-label">02 / SKILLS</span>

          <h2>
            Technologies I
            <span className="gradient-text"> work with.</span>
          </h2>
        </div>

        <p>
          My technical toolkit combines programming, AI, full-stack
          development, and modern developer tools.
        </p>
      </div>

      {/* TOP STATS */}
      <div className="skills-dashboard-stats">
        <div className="skills-stat">
          <div className="skills-stat-icon">
            <Code2 size={19} />
          </div>

          <div>
            <strong>20+</strong>
            <span>Technologies</span>
          </div>
        </div>

        <div className="skills-stat">
          <div className="skills-stat-icon">
            <BrainCircuit size={19} />
          </div>

          <div>
            <strong>AI / ML</strong>
            <span>Core Focus</span>
          </div>
        </div>

        <div className="skills-stat">
          <div className="skills-stat-icon">
            <Globe size={19} />
          </div>

          <div>
            <strong>Full Stack</strong>
            <span>Development</span>
          </div>
        </div>

        <div className="skills-stat">
          <div className="skills-stat-icon">
            <Terminal size={19} />
          </div>

          <div>
            <strong>Always</strong>
            <span>Learning</span>
          </div>
        </div>
      </div>

      {/* SKILLS GRID */}
      <div className="skills-dashboard-grid">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              className={`skills-dashboard-card ${
                category.featured ? "skills-dashboard-featured" : ""
              }`}
              key={category.id}
            >
              {/* CARD HEADER */}
              <div className="skills-dashboard-card-header">
                <div className="skills-dashboard-icon">
                  <Icon size={21} />
                </div>

                <div className="skills-dashboard-title">
                  <span>{category.id}</span>
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>
              </div>

              {/* SKILLS */}
              <div className="skills-dashboard-list">
                {category.skills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CORE STACK */}
      <div className="skills-core">
        <div className="skills-core-heading">
          <div className="skills-core-icon">
            <Sparkles size={18} />
          </div>

          <div>
            <span>CORE STACK</span>
            <h3>What I enjoy building with</h3>
          </div>
        </div>

        <div className="skills-core-list">
          <span>
            <Cpu size={14} />
            Python
          </span>

          <span>
            <BrainCircuit size={14} />
            AI / ML
          </span>

          <span>
            <Globe size={14} />
            React
          </span>

          <span>
            <Terminal size={14} />
            Java
          </span>

          <span>
            <Database size={14} />
            FastAPI
          </span>

          <span>
            <Code2 size={14} />
            JavaScript
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;