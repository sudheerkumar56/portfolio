"use client"

import { useEffect, useRef } from "react"
import "./Contact.css"

function Contact() {
  const formRef = useRef(null)

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset()
    }
  }, [])

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:sudheer984914@gmail.com">sudheer984914@gmail.com</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/sudheer-kumar-bellamkonda-1437b9238/" target="_blank" rel="noreferrer">
                linkedin.com/in/sudheerkumar56
              </a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a href="https://github.com/sudheerkumar56" target="_blank" rel="noreferrer">
                github.com/sudheerkumar56
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            <form
              ref={formRef}
              className="contact-form"
              action="https://formspree.io/f/xldblkky" 
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Your message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
