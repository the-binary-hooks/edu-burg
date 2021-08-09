// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";

// Components
import AddAPost from "../AddAPost/AddAPost";
import Posts from "../Posts/Posts";
import SearchPosts from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";

const NewsFeed = () => {
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={3} className="column">
                    <br />
                    <SearchPosts placeholder="Search for a post" />
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
