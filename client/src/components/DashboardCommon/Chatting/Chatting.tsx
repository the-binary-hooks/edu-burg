import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import "./Chatting.css";

const Chatting = () => {
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10} className="column">
                    <div className="chat-header">
                        <h5>Rui Pattricio</h5>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Chatting;
