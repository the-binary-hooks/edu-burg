// React Bootstrap
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// React Router
import { useHistory } from "react-router-dom";
// Components
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

const CoursesAssigned = () => {
    const userInfo = {
        id: sessionStorage.getItem("_id"),
        role: sessionStorage.getItem("role")
    }
    useEffect(() => {
        console.log(userInfo.id, 'id');
        console.log(userInfo.role, 'role');
        fetch(`/api/${userInfo.role}/getCourses/${userInfo.id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({role: userInfo.role})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [userInfo.id, userInfo.role]);

    // React Router vars
    const history = useHistory();
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10}>
                    <br />
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

export default CoursesAssigned;
