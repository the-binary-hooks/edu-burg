import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

const TeacherProfile = () => {
    return (
        <Container className="sidebar-content-container">
            <Row>
                <Sidebar />
                <Col md={10} style={{ textAlign: "center" }}>
                    <Container>
                        <img
                            src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                            alt="profilePic"
                            className="profile-pic"
                        />
                        <h4 className="brand-text">John Doe</h4>
                        <p>
                            Senior Professor of Physics in the University of
                            Bangladesh
                        </p>
                    </Container>

                    <Table responsive="sm">
                        <thead>
                            <tr className="brand-text">
                                <th>Courses</th>
                                <th>Students Number</th>
                                <th>Posts</th>
                                <th>Followers</th>
                                <th>Following</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13</td>
                                <td>6693</td>
                                <td>55</td>
                                <td>583</td>
                                <td>29</td>
                                <td>4.9</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <h6>Rate this Teacher</h6>
                    <Form.Control type="text" placeholder="5.00" />
                    <br />
                    <Button className="brand-button">Submit</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default TeacherProfile;
