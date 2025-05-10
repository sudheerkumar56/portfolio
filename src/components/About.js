import "./About.css"
import profileImage from "../assets/1740717733466.jpg" // Replace with your actual path

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a recent Computer Science Engineering graduate with a strong foundation in programming, data
              structures, and algorithms. My academic journey has equipped me with both theoretical knowledge and
              practical skills in software development.
            </p>
            <p>
              I'm passionate about creating efficient, user-friendly applications and continuously learning new
              technologies. My goal is to contribute to innovative projects that solve real-world problems.
            </p>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
          <div className="about-image">
            <img src={profileImage} alt="Venkata Sudheer Kumar Bellamkonda" className="profile-image" />
            <h3>Venkata Sudheer Kumar Bellamkonda</h3>
            <p>Computer Science Engineer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
