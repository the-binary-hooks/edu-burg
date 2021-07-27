import { Button, Col, Form, Row } from "react-bootstrap";
import "./AddAPost.css";

const AddAPost = () => {
    return (
        <div className="container">
            <Row>
                <Col md={1}>
                    <div className="profile-img">John</div>
                </Col>
                <Col md={9}>
                    <Form.Control type="text" placeholder="Write Something" />
                    <Button className="post-button brand-button">Post</Button>
                </Col>
            </Row>
        </div>
    );
};

export default AddAPost;
