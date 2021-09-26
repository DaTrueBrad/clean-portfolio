import React from 'react'

function About() {
  return (
    <section id="about-me-section">
      <div className="total-container">
        <img src="./brady.jpg" alt="" />
      {/* </div> */}
      <div className="about-container">
        <div className="about-text">
          <h1>About Me</h1>
          <h2>Web Developer</h2>
          <p>I am a web developer based out of Vineyard, UT! I graduate from Dev Mopuntain in Lehi with a certificate as a full-stack react engineer. I have completed 2 full projects and have assisted on 4 others.</p>
          <h2>Powerlifter</h2>
          <p>My hard work and drive comes from my experience as a personal trainer and a powerlifter! I'm a big beliveer that hard physical work can increase your mental fortitude and overall capabilities.</p>
          <h2>Hiker</h2>
          <p>The outdoors are my favorite! I enjoy trail running, hiking, backpacking, and cmaping. Beign in nature is comforting, relaxing, and is a good reset from the business of civilization.</p>
        </div>
        <div className="tech-wrapper">
          <h2>Developer Technologies</h2> 
          <div className="technologies">
            <i class='bx bxl-javascript' style={{color: '#F7DF1E'}}></i>
            <i class='bx bxl-react' style={{color: '#5ED3F3'}}></i>
            <i class='bx bxl-nodejs' style={{color: '#87BF00'}}></i>
            <i class='bx bxl-html5' style={{color: '#DE4E26'}}></i>
            <i class='bx bxl-css3' style={{color: '#2862E9'}}></i>
            <i class='bx bxs-data' style={{color: '#31648C'}}></i>
          </div>
        </div>
        
      </div>
      </div>
      {/* <div className="img-container"> */}
      
    </section>
  )
}

export default About
