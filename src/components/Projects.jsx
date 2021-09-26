import React from 'react'

function Projects() {
  return (
    <section id="projects-section">
      <h1>Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <h2>Pokemon Team Builder</h2>
        <iframe src="https://drive.google.com/file/d/1uBSVvqlTE8PuFtH4got1eI9bMxEvTze3/preview" width="640" height="480" allow="autoplay"></iframe>
        <h2>Tech Used</h2>
        <ul>
          <li>Javascript</li>
          <li>Express</li>
          <li>Axios</li>
          <li>REST API</li>
        </ul>
        <div className="button-container">
          <button>Code</button>
          <button>Live</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
