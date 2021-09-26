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
        <p>This app uses axios get requests to dig into a REST API which displays the data on the fron ten dfor use by the user.</p>
        <div className="button-container">
          <button>Code</button>
          <button>Live</button>
        </div>
        </div>

        <div className="project-card">
          <h2>New U Fitness</h2>
          <iframe src="https://drive.google.com/file/d/1_QUVEOI1536M5mkX7mIcDjuRGENw_GWZ/preview" width="640" height="480" allow="autoplay"></iframe>
        <h2>Tech Used</h2>
        <div className="tech-project">
          <div className="tech-used-column">
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="tech-used-column">
            <ul>
              <li>PostgresSQL</li>
              <li>Sequelize</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
          
        </div>
        
        <p>New U is a workout builder that allows users to create workout programs up to 24 weeks in length, select one as a current program, browse articles, track stats, and save their favorites to their account. </p>
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
