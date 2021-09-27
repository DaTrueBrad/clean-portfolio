import React from 'react'

function Projects() {
  return (
    <section id="projects-section">
      <h1>Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <div>
            <h2>Pokemon Team Builder</h2>
            <iframe src="https://drive.google.com/file/d/1uBSVvqlTE8PuFtH4got1eI9bMxEvTze3/preview" allow="autoplay"></iframe>
            <p>This app uses axios get requests to dig into a REST API which displays the data on the fron ten dfor use by the user.</p>
          </div>
          <div className="button-container">
            <a href="https://github.com/DaTrueBrad/pokemon-team-builder" target="_blank"><i class='bx bx-code-block'></i></a>
            <a href="https://pokemon-team-and-stats.herokuapp.com/" target="_blank"><i class='bx bx-globe'></i></a>
          </div>
        </div>

        <div className="project-card">
          <div>
            <h2>New U Fitness</h2>
            <iframe src="https://drive.google.com/file/d/1_QUVEOI1536M5mkX7mIcDjuRGENw_GWZ/preview" allow="autoplay"></iframe>
            <p>New U is a workout builder that allows users to create workout programs up to 24 weeks in length, select one as a current program, browse articles, track stats, and save their favorites to their account. </p>
          </div>
          <div className="button-container">
            <a href="https://github.com/DaTrueBrad/newU" target="_blank"><i class='bx bx-code-block'></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
