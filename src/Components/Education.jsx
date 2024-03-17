import React from "react";

import image from "../images/R.png";
import image2 from "../images/motion-background.jpg";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <img className="background" src={image2} alt="" />
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ width: "100%", height: "auto" }}
            alt=" Kasireddy Nayanareddy College of Engineering and Research"
          />
        </div>
        <div style={{ width: "60%", padding: "0 2rem" }}>
          <h3>Kasireddy Nayanareddy College of Engineering and Research</h3>
          <p className="large">
            I am currently studying at Kasireddy Nayanareddy College of Engineering and Research. I
            am learning about web design, user experience, and inclusive design. I am also learning
            about focus group testing, mobile user interfaces, and graphic design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
