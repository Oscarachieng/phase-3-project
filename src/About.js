// About Page
import React from "react";
import Team from "./Team";
import Successes from "./Successes";
import Happy from "./images/Happy.png"

const About = () => {
  return (
    <section>
      <h2 className="about">This page is not yet implemented</h2>
      <Team />
      <Successes />
      <img src={Happy} alt = "Welcome" className="welcome-happy"/>
    </section>
  );
};

export default About;
