import React from 'react'

function Projects() {
  return (
    <section id="projects-section">
      <h1>Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <div>
            <h2>Pokemon Team Builder</h2>
            <div className="iframe-container">
              <iframe src="https://drive.google.com/file/d/1uBSVvqlTE8PuFtH4got1eI9bMxEvTze3/preview" allow="autoplay" className='responsive-iframe'></iframe>

            </div>
            <p>This app uses Axios GET requests to dig into a REST API which displays select data on the front end for use by the user.</p>
          </div>
          <div className="button-container">
            <a href="https://github.com/DaTrueBrad/pokemon-team-builder" target="_blank"><i class='bx bx-code-block'></i>
            <h4>Code</h4></a>
            <a href="https://pokemon-team-and-stats.herokuapp.com/" target="_blank"><i class='bx bx-globe'></i>
            <h4>Site</h4></a>
          </div>
        </div>

        <div className="project-card">
          <div>
            <h2>New U Fitness</h2>
            <img src="./newUApp.png" alt="" />
            <p>New U is an online platform where users can build workout programs, track workouts, browse articles, update user lifting stats, and more - on a mobile-friendly platform.</p>
          </div>
          <div className="button-container">
            <a href="https://github.com/DaTrueBrad/newU" target="_blank"><i class='bx bx-code-block'></i>
            <h4>Code</h4></a>
            <a href="https://newufitness.herokuapp.com" target="_blank"><i class='bx bx-globe'></i>
            <h4>Site</h4></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
