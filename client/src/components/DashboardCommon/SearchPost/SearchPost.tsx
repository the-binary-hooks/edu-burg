import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";
import "./SearchPost.css";

const SearchPosts = () => {
    const [searchStr, setSearchStr] = useState("");
    return (
        <div className="container">
            <Form.Control
                className="search-input"
                type="text"
                placeholder="Search for a post"
                value={searchStr}
                onChange={(e) => setSearchStr(e.target.value)}
            />
            <Button className="search-button brand-button">
                <FontAwesomeIcon icon={faSearch} />
            </Button>
        </div>
    );
};

export default SearchPosts;
