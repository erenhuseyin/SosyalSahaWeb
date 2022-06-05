import React from "react";
import Intro from "../../images/intro.svg";
import "./IntroSection.css";
const IntroSection = () => {
  return (
    <div>
      <div className="d-flex intro-section-container">
        {/* intro section image  */}
        <div>
          <img className="intro-image" src={Intro} alt="" />
        </div>
        <div>
          {/* some summary of our courses  */}
          <p>
              Sosyal saha, halı sahaya gitmeden, kapora vermeden randevu alabileceğiniz bir web sitesidir.
              Takımınızla halı saha keyfini planlamak için doğru adrestesiniz. Sahaların doluluk oranını, adreslerini öğrenebilir,
              halı sahalar arasında tercih yapabilirsiniz.
          </p>
          {/* what we are give to the student  */}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
