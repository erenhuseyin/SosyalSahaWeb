import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import IntroSection from "../IntroSection/IntroSection";
import HSaha from "../HSaha/HSaha";

const HSahaData = () => {
  const [hsdata, setHsdata] = useState([]);
  // load from API
  useEffect(() => {
    fetch("halısahalar.JSON")
      .then((res) => res.json())
      .then((data) => setHsdata(data));
  }, []);

  return (
    <div className="mt-5">
      {/* component call  */}
      <h1>
        <span>Halı Sahalarımız</span>
      </h1>
      {/* map our array ad show the card */}
      <Row xs={1} md={2} className="g-4">
        {hsdata.map((hsaha) => (
          <HSaha key={hsaha.id} hsaha={hsaha}></HSaha>
        ))}
      </Row>
    </div>
  );
};

export default HSahaData;
