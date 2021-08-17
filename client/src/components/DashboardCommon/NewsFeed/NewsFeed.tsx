// React
import { useState } from "react";
// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Components
import AddAPost from "../AddAPost/AddAPost";
import Posts from "../Posts/Posts";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";

const NewsFeed = () => {
    // Initial states
    const [searchStr, setSearchStr] = useState("");

    return (
        <Container fluid>
            <Row>
                {/* <Sidebar /> */}
                <Col md={3} className="column">
                    <br />
                    {/* <Search
                        placeholder="Search for a post"
                        searchStr={searchStr}
                        setSearchStr={setSearchStr}
                    /> */}
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
