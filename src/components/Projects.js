import "./Projects.css"
import foods from "../assets/food.png" 
import stocks from "../assets/stock.jpg"
import commerce from "../assets/ecommerce.jpg"
import srgym from "../assets/gym.jpeg"
import srcar from "../assets/car.jpg"
import hub from "../assets/git.png"
import vedio from "../assets/image.png"

function Projects() {
  const projects = [
  {
    title: "Diet Recall – Personal Nutrition Tracker",
    description:
      "A responsive web application for tracking daily diet and nutrition intake, helping users maintain healthy eating habits.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image:foods,
    githubLink: "https://github.com/sudheerkumar56/Recall-Diet.git",
    demoLink: "#"
  },
  {
    title: "Stock Market Prediction System",
    description:
      "A system built using machine learning to predict stock price trends from historical data, offering visualization and predictive insights.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    image:stocks,
    githubLink: "#",
    demoLink: "#"
  },
  {
      title: "E-Commerce Platform",
      description:
        "A responsive e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image:commerce,
      githubLink: "https://github.com/sudheerkumar56/Ecommerce.git",
      demoLink: "#",
    },
  {
    title: "SR GYM Web Application",
    description:
      "A gym membership management system with user registration, login verification, and dashboard display, using JSON Server for data storage.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON Server"],
    image:srgym,
    githubLink: "https://github.com/sudheerkumar56/srgym.git",
    demoLink: "#"
  },
  {
    title: "SR Cars Web Application",
    description:
      "A car service or dealership web app with user registration, authentication, and personalized dashboard, mimicking the SR GYM architecture.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON Server"],
    image:srcar,
    githubLink: "https://github.com/sudheerkumar56/srcars.git",
    demoLink: "#"
  },
]

  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} className="project-link github-link" target="_blank" rel="noreferrer" title="View Code on GitHub">
                  <img src={hub} alt="GitHub" className="icon" />
                </a>
                <a href={project.demoLink} className="project-link demo-link" target="_blank" rel="noreferrer" title="Watch Demo Video">
                  <img src={vedio} alt="Video" className="icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
