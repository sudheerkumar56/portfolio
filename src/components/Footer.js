import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="copyright">© 2025 Venkata Sudheer Kumar Bellamkonda. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/sudheerkumar56" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sudheer-kumar-bellamkonda-1437b9238/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="sudheer984914@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
