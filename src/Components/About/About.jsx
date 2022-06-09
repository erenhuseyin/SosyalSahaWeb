import React from "react";
import "./About.css";
import AboutImg from "../../images/about.svg";
const About = () => {
  return (
    <div>
      <section>
        <div className="about-container">
          <h1 className="">HAKKIMIZDA </h1>
          <h2>Biz kimiz</h2>
          <h4>Sosyal Saha'ya hoşgeldiniz</h4>
        </div>
      </section>
      <section className="mt-5 about-section-container">
        <div className="d-flex justify-content-between align-items-center about">
          <div>
            <h1>Biz kimiz? Sosyal Saha nedir?</h1>
            <p>
              Sosyal saha, halı sahaya gitmeden, kapora vermeden randevu
              alabileceğiniz bir web sitesidir. Takımınızla halı saha keyfini
              planlamak için doğru adrestesiniz. Sahaların doluluk oranını,
              adreslerini öğrenebilir, halı sahalar arasında tercih
              yapabilirsiniz.
            </p>
            <h4>İletişim için:</h4>
            <span>0543 530 36 65 </span>
          </div>
          <div style={{ width: "90%", margin: " 0 auto" }}>
            <img className="img-fluid" src={AboutImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
