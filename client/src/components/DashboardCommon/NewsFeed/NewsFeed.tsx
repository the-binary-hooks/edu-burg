import { Col, Container, Row } from "react-bootstrap";
import AddAPost from "../AddAPost/AddAPost";
import Posts from "../Posts/Posts";
import SearchPosts from "../SearchPost/SearchPost";
import Sidebar from "../Sidebar/Sidebar";

const NewsFeed = () => {
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={3} className="column">
                    <br />
                    <SearchPosts />
                    <br />
                </Col>
                <Col md={7}>
                    <AddAPost />
                    <br />
                    <Posts />
                </Col>
            </Row>
        </Container>
    );
};

export default NewsFeed;
