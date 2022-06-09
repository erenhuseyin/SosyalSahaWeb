import React from "react";
import Intro from "../../images/intro.svg";
import "./IntroSection.css";
const IntroSection = () => {
  return (
    <div>
      <div className="d-flex intro-section-container">
        <div>
          <img className="intro-image" src={Intro} alt="" />
        </div>

        <div>
          <p>
            Sosyal saha, halı sahaya gitmeden, kapora vermeden randevu
            alabileceğiniz bir web sitesidir. Takımınızla halı saha keyfini
            planlamak için doğru adrestesiniz. Sahaların doluluk oranını,
            adreslerini öğrenebilir, halı sahalar arasında tercih
            yapabilirsiniz.
          </p>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
