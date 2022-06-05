import React from "react";
import { Card, Col } from "react-bootstrap";
import { useGlobalContext } from "../../context";

const HSaha = (props) => {
  //randevu al
  const { openModal } = useGlobalContext();
  // some common object peacking
  const { img, key, address, num, price, title } = props.hsaha;

  return (
    <div className="mt-5 ">
      <div className="container">
        {/* courses summary  */}
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>
                <h4>{title}</h4>
              </Card.Title>
              <Card.Text>{address}</Card.Text>
              <h4>Fiyat: {price}₺</h4>
              <h4>Telefon: {num}</h4>
              <button onClick={openModal} className="btn btn-success">
                Randevu al
              </button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default HSaha;
