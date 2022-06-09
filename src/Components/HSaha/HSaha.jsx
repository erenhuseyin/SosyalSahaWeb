import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Button, Container } from "react-bootstrap";

const HSaha = (props) => {
  //json'dan çekilen objeler
  const { img, key, address, num, price, title, times } = props.hsaha;
  //rezervasyon

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //rezervasyon seçimi
  const [selectedTime, setSelectedTime] = useState();

  useEffect(() => {
    console.log(selectedTime);
  }, [selectedTime]);

  return (
    <div className="mt-5 ">
      <div className="container">
        {/* halısaha card ve rezervasyon modal */}
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
                    <Container
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      {times.map((time, index) => (
                        <div
                          key={index}
                          style={{
                            width: "400px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            gap: "5px",
                          }}
                        >
                          <input
                            onClick={() => setSelectedTime(time)}
                            name="timeSelect"
                            id={"time" + index}
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                            type="radio"
                          />

                          <label htmlFor={"time" + index}> {time}</label>
                          <br></br>
                        </div>
                      ))}
                    </Container>
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
