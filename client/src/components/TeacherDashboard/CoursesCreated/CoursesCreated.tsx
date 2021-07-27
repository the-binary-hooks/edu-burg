import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

const CoursesCreated = () => {
    const history = useHistory();
    return (
        <Container className="sidebar-content-container">
            <Row>
                <Sidebar />
                <Col md={10}>
                    <h1 className="brand-text">Your Courses</h1>
                    <br />
                    <Row>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col
                                md={6}
                                onClick={() => history.push(`/course/:id`)}
                            >
                                <Card className="card">
                                    <Card.Img
                                        variant="top"
                                        src="holder.js/100px160"
                                    />
                                    <Card.Body>
                                        <Card.Title className="brand-text">
                                            Card title
                                        </Card.Title>
                                        <Card.Text>
                                            This is a longer card with
                                            supporting text below as a natural
                                            lead-in to additional content. This
                                            content is a little bit longer.
                                        </Card.Text>
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

export default CoursesCreated;
