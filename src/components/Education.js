import "./Education.css"

function Education() {
  // const courses = [
  //   "Database Management Systems",
  //   "Computer Networks",
  //   "Software Engineering",
  //   "Web Development",
  // ]

  return (
    <section id="education" className="education">
      <div className="container education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <h3 className="degree">Bachelor of Technology in Computer Science Engineering</h3>
          <p className="university">MLR INSTITUTE OF TECHNOLOGY, 2020 - 2024</p>
          <p className="grade">Graduated with First Class Honors (CGPA: 7.4/10)</p>

          {/* <h4 className="courses-title">Key Courses:</h4>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div className="course-item" key={index}>
                <div className="course-bullet"></div>
                <span>{course}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Education
