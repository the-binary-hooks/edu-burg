// React Bootstrap
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";

// React Router
import { Link } from "react-router-dom";

// Components
import Sidebar from "../Sidebar/Sidebar";

// CSS
import "./AllChats.css";

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const AllChats = () => {
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10}>
                <div style={{marginTop: '10px'}}>
                        <Form>
                            <Row className="align-items-center justify-content-center">
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                        Search 
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                        <FormControl id="inlineFormInputGroup" placeholder="Search" />
                                    </InputGroup>
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2 brand-button">
                                        SMS
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
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
