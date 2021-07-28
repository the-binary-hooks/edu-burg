import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./AllChats.css";

const AllChats = () => {
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10}>
                    <div className="chat-container">
                        <Link to={`/chat/:id`} className="react-link">
                            <div className="chat">
                                <img
                                    src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                                    alt="profilePic"
                                    className="profile-pic"
                                />
                                <div>
                                    <h5>Rui Pattricio</h5>
                                    <small>Senior Software Engineer</small>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="chat-container">
                        <Link to={`/chat/:id`} className="react-link">
                            <div className="chat">
                                <img
                                    src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                                    alt="profilePic"
                                    className="profile-pic"
                                />
                                <div>
                                    <h5>Rui Pattricio</h5>
                                    <small>Senior Software Engineer</small>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="chat-container">
                        <Link to={`/chat/:id`} className="react-link">
                            <div className="chat">
                                <img
                                    src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                                    alt="profilePic"
                                    className="profile-pic"
                                />
                                <div>
                                    <h5>Rui Pattricio</h5>
                                    <small>Senior Software Engineer</small>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="chat-container">
                        <Link to={`/chat/:id`} className="react-link">
                            <div className="chat">
                                <img
                                    src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                                    alt="profilePic"
                                    className="profile-pic"
                                />
                                <div>
                                    <h5>Rui Pattricio</h5>
                                    <small>Senior Software Engineer</small>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="chat-container">
                        <Link to={`/chat/:id`} className="react-link">
                            <div className="chat">
                                <img
                                    src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                                    alt="profilePic"
                                    className="profile-pic"
                                />
                                <div>
                                    <h5>Rui Pattricio</h5>
                                    <small>Senior Software Engineer</small>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="chat-container">
                        <Link to={`/chat/:id`} className="react-link">
                            <div className="chat">
                                <img
                                    src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                                    alt="profilePic"
                                    className="profile-pic"
                                />
                                <div>
                                    <h5>Rui Pattricio</h5>
                                    <small>Senior Software Engineer</small>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AllChats;
