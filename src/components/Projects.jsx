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
            <p>This app uses Axios GET requests to dig into a REST API which displays select data on the front end for use by the user.</p>
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
            <p>New U is an online platform for users to center their physical health. Users can create workouts themselves or pick one from a pre-made template made by a top coach, and follow along tracking their progress! If users are not familiar on the ins-and-outs of health and fitness, New U has an articles page where the most informative, simple, and correct articles on the planet will be linked so users can have guidance on their journey.</p>
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
