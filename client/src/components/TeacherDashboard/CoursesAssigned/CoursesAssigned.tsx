// React Bootstrap
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
// Components
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";
import ListCourse from "./ListCourse";

// courses array interface -- typeScript
interface ICourses {
    courseCode: string;
    courseStudents: { studentName: string; _id: string }[];
    courseTeacher: { teacherName: string };
    courseTitle: string;
    department: string;
    __v: number;
    _id: string;
}

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
    const [courses, setCourses] = useState<ICourses[]>([]);
    const [modalShow, setModalShow] = useState(false);
    const [courseId, setCourseId] = useState("");
    const userInfo = {
        id: sessionStorage.getItem("_id"),
        role: sessionStorage.getItem("role"),
    };

    useEffect(() => {
        fetch(`/api/${userInfo.role}/getCourses/${userInfo.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ role: userInfo.role }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result[0].courses);
                setCourses(data.result[0].courses);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userInfo.id, userInfo.role]);

    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10}>
                    <br />
                    <h1 className="brand-text">Your Courses</h1>
                    <br />
                    <Row>
                        {courses.map((course, index) => (
                            <ListCourse key={index} course={course} />
                        ))}
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
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default CoursesAssigned;
