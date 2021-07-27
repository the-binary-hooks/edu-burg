// React
import { useState } from "react";
// Font Awesome
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// React Bootstrap
import { Button, Form } from "react-bootstrap";
// Style Sheet
import "./SearchPost.css";

const SearchPosts = () => {
    // Initial State of the search string
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
