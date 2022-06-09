import React from "react";
import { Card, Col } from "react-bootstrap";

const Halısaha = (props) => {
  const { title, img, address, price, num } = props.halısaha;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <h4>{title}</h4>
            </Card.Title>
            <Card.Text>{address.slice(0, 200)}</Card.Text>
            <h4>Fiyat: {price}₺</h4>
            <h4>Telefon: {num}</h4>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Halısaha;
