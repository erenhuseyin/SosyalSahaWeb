import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import HSaha from "../HSaha/HSaha";

const HSahaData = () => {
  const [hsdata, setHsdata] = useState([]);
  // json'dan verileri çekme
  useEffect(() => {
    fetch("halısahalar.JSON")
      .then((res) => res.json())
      .then((data) => setHsdata(data));
  }, []);

  return (
    <div className="mt-5">
      <h1>
        <span>Halı Sahalarımız</span>
      </h1>
      {/* verileri hsdata ile prop şeklinde alma */}
      <Row xs={1} md={2} className="g-4">
        {hsdata.map((hsaha) => (
          <HSaha key={hsaha.id} hsaha={hsaha}></HSaha>
        ))}
      </Row>
    </div>
  );
};

export default HSahaData;
