// React Bootstrap
import { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
// Components
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Why do want drop this course?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Dropping Reason</h4>
        <input
          type="text"
          className="container-fluid"
          style={{ minHeight: "150px", border: "1px solid grey" }}
          placeholder="Describe your reason"
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

const CoursesAssigned = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col md={10}>
          <br />
          <h1 className="brand-text">Your Course</h1>
          <br />
          <Row>
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col md={6}>
                <Card className="card">
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title className="brand-text">Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Send Cousre Drop Request
                    </Button>

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursesAssigned;
