import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Halısaha from "../Halısaha/Halısaha";

const HomeHalısaha = () => {
  const [halısahalar, setHalısahalar] = useState([]);
  useEffect(() => {
    fetch("halısahalar.JSON")
      .then((res) => res.json())
      .then((data) => setHalısahalar(data));
  }, []);

  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {halısahalar.slice(0, 4).map((halısaha) => (
          <Halısaha key={halısaha.id} halısaha={halısaha}></Halısaha>
        ))}
      </Row>
    </div>
  );
};

export default HomeHalısaha;
