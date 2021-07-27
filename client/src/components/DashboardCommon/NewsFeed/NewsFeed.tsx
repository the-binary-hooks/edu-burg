import { Col, Container, Row } from "react-bootstrap";
import AddAPost from "../AddAPost/AddAPost";
import Posts from "../Posts/Posts";
import SearchPosts from "../SearchPost/SearchPost";

const NewsFeed = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <SearchPosts />
                </Col>
                <Col md={8}>
                    <AddAPost />
                    <Posts />
                </Col>
            </Row>
        </Container>
    );
};

export default NewsFeed;
