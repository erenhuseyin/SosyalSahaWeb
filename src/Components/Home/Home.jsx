import React from "react";
import { Link } from "react-router-dom";
import Halısaha from "../Halısaha/Halısaha";
import HomeHalısaha from "../HomeHalısaha/HomeHalısaha";
import IntroSection from "../IntroSection/IntroSection";
import HSaha from "../HSaha/HSaha";

const Home = () => {
  return (
    <div>
      <div className="container">
        <IntroSection />
        <h1
          style={{
            textTransform: "uppercase",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <span>Halı Sahalar</span>
        </h1>

        <HomeHalısaha />

        <div>
          <Link to="/halisahalar" className="btn btn-success w-25 mb-5">
            Hepsini göster
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
