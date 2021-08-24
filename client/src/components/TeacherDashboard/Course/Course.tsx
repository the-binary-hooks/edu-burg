import { useState } from "react";
// React Bootstrap
import { Col, Container, Row, Table, Button, Modal } from "react-bootstrap";
// Components
// import Sidebar from "../../DashboardCommon/Sidebar/Sidebar.test"
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";
import CourseStudent from "./CourseStudent/CourseStudent";
// CSS
import "./Course.css";

const Course = () => {
    const [modalShow, setModalShow] = useState(false);

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

    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10} style={{ textAlign: "center" }}>
                    <img
                        src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                        alt="profilePic"
                        className="md:m-5"
                    />
                    <h2 className="brand-text">Web Development</h2>
                    <p>
                        Full Stack Development with React.js, Express.js,
                        MongoDB and Node.js
                    </p>
                    <br />
                    <Table responsive="sm">
                        <thead>
                            <tr className="brand-text">
                                <th>Classes</th>
                                <th>Assignments</th>
                                <th>Semester</th>
                                <th>Time</th>
                                <th>Students</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>50</td>
                                <td>29</td>
                                <td>Spring</td>
                                <td>3 months</td>
                                <td>583</td>
                                <td>4.9</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <br />
                    <h5>Students in this course</h5>
                    <Table responsive="sm">
                        <thead>
                            <tr className="brand-text">
                                <th>Student Name</th>
                                <th>Semester</th>
                                <th>CGPA</th>
                                <th>Assignments Done</th>
                                <th>Classes Taken</th>
                                <th></th>
                                <th></th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CourseStudent />
                            <CourseStudent />
                            <CourseStudent />
                            <CourseStudent />
                            <CourseStudent />
                            <CourseStudent />
                        </tbody>
                    </Table>
                    <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                    >
                        Send Course Drop Request
                    </Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <br />
                    <br />
                    <br />
                </Col>
            </Row>
        </Container>
    );
};

export default Course;
