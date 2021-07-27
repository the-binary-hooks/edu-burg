import { Col, Container, Row, Table } from "react-bootstrap";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";
import CourseStudent from "./CourseStudent/CourseStudent";

const Course = () => {
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10} style={{ textAlign: "center" }}>
                    <img
                        src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                        alt="profilePic"
                        className="m-5"
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
                </Col>
            </Row>
        </Container>
    );
};

export default Course;
