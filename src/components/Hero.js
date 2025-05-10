import "./Hero.css"

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Venkata Sudheer Kumar Bellamkonda</span>
          </h1>
          <p className="hero-subtitle">
            Computer Science Engineering Graduate with a passion for building innovative solutions
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/VENKATA-SUDHEER-KUMAR-BELLAMKONDA - Copy.pdf" className="btn btn-secondary" download>
                Download Resume
            </a>

          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Hero
