import { Button, Col, Container, Form, Row, Table } from "react-bootstrap"
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar"


const SingleAssignment = () => {
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col>
                    <br />
                    <h1 className="brand-text">Assignment of xxx</h1>
                    <br />
                    <Row>
                        <h3>Student's Name</h3>
                        <p>Link : Assignment link</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Marks :</Form.Label>
                                <Form.Control type="number" placeholder="Give Marks" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Row>

                </Col>
            </Row>

        </Container>
    )
}

export default SingleAssignment
