import React from "react";

function Contact() {
  return (
    <section id="contact-section">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <a href="https://github.com/DaTrueBrad" target="_blank">
          <i class="bx bxl-github" style={{ color: "#161B22" }}></i>
        </a>
        <a href="https://www.linkedin.com/in/bottbrady/" target="_blank">
          <i class="bx bxl-linkedin-square" style={{ color: "#00639A" }}></i>
        </a>
        <a href="https://www.facebook.com/bottbrady" target="_blank">
          <i class="bx bxl-facebook-square" style={{ color: "#3A5794" }}></i>
        </a>
        <a href="https://www.instagram.com/bottbrady/" target="_blank">
          <i class="bx bxl-instagram-alt" style={{ color: "#B82B91" }}></i>
        </a>
        <a href="mailto:bottbrady@gmail.com?subject=Hi Brady, I saw your portfolio!" target="_blank">
          <i class="bx bx-mail-send" style={{ color: "#CB362D" }}></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
