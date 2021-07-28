import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Form, Row } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import "./Chatting.css";

const Chatting = () => {
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10} className="column">
                    <div className="main-chat">
                        <div className="chat-header">
                            <h5>Rui Pattricio</h5>
                            <small>Last seen today at 12.00 pm</small>
                        </div>
                        <div className="overflow-y-scroll">
                            <div className="incoming-message">
                                Hello, how are you?
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                            </div>
                            <div className="incoming-message">
                                Nice! How was your holidays?
                            </div>
                            <div className="sent-message">
                                Awesome! We went to Spain to enjoy them.
                            </div>
                            <div className="incoming-message">
                                I love Spanish foods!
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                            </div>
                            <div className="sent-message">
                                Oh! Fine! What about you?
                                jfffffffffffffffaldjfladjf
                                dajjd;lfasssssssssssssssssssssjk4wtu8iafdjlzkvcjlcjlkjkl;
                            </div>
                        </div>
                        <div className="chat-footer">
                            <Form.Control
                                type="text"
                                placeholder="Write Something"
                                className="message-input"
                            />
                            <button className="send-button">
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    size="2x"
                                    className="send-icon"
                                />
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Chatting;
