// React Bootstrap
import { Button, Form, Row } from "react-bootstrap";

// CSS
import "./AddAPost.css";

const AddAPost = () => {
    return (
        <div className="container">
            <Row>
                <div className="col-3">
                    <div className="profile-img">John</div>
                </div>
                <div className="col-9">
                    <Form.Control type="text" placeholder="Write Something" />
                    <Button className="post-button brand-button">Post</Button>
                    <br />
                </div>
            </Row>
        </div>
    );
};

export default AddAPost;
