import React, { useState } from "react";
import { Card, Col, Modal, Button, Form } from "react-bootstrap";

const HSaha = (props) => {
  // some common object peacking
  const { img, key, address, num, price, title, times } = props.hsaha;
  //randevu
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <>
                <button onClick={handleShow} className="btn btn-success">
                  Rezervasyon yap
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Rezervasyonunuzu Seçiniz</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      {["checkbox"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            inline
                            label="1"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label="2"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                          <Form.Check
                            inline
                            label="3 (disabled)"
                            type={type}
                            id={`inline-${type}-3`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Çık
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Randevu Al
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default HSaha;
