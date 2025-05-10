import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="copyright">© 2023 John Doe. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/johndoe" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:john.doe@example.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
