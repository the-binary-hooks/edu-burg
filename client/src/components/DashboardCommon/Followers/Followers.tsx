// React Bootstrap
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// Components
import Sidebar from "../Sidebar/Sidebar";
// CSS
import "./Followers.css";
//all users
import users from "./Users";

interface array {
  id: number;
  name: string;
  designation: string;
}

const Followers = () => {
  const [follow, setFollow] = useState<{
    isFollowing: array;
    accounts: { id: number; name: string; designation: string }[];
  }>({
    isFollowing: {} as array,
    accounts: users,
  });

  const getIndex = (index: number) => {
    setFollow({ ...follow, isFollowing: follow.accounts[index] });
  };
  console.log(follow.isFollowing);

  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col md={10}>
          <Container>
            <div>
              <div className="text-center mb-5">
                <br />
                <h3 className="brand-text">Followers</h3>
              </div>
              <div className="follower-container">
                {users.map((elements, index) => (
                  <Row>
                    <Col md={8} className="follower">
                      <img
                        src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                        alt="profilePic"
                        className="profile-pic"
                      />
                      <div>
                        <h5>{elements.name}</h5>
                        <small>{elements.designation}</small>
                      </div>
                    </Col>
                    <Col md={2}>
                      <Button
                        className="brand-button follow-button"
                        onClick={() => {
                          getIndex(index);
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} className="mx-2" />
                        {follow.accounts[index] === follow.isFollowing
                          ? "UnFollow"
                          : "Follow"}
                      </Button>
                    </Col>
                  </Row>
                ))}
              </div>
              <Button className="brand-button">Show More</Button>
            </div>
            <br />
            <div>
              <div className="text-center mb-3">
                <h3 className="brand-text">Following</h3>
              </div>
              <div className="follower-container">
                {users.map((elements, index) => (
                  <Row>
                    <Col md={8} className="follower">
                      <img
                        src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                        alt="profilePic"
                        className="profile-pic"
                      />
                      <div>
                        <h5>{elements.name}</h5>
                        <small>{elements.designation}</small>
                      </div>
                    </Col>
                    <Col md={2}>
                      <Button
                        className="brand-button follow-button"
                        onClick={() => {
                          getIndex(index);
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} className="mx-2" />
                        {follow.accounts[index] === follow.isFollowing
                          ? "Follow"
                          : "UnFollow"}
                      </Button>
                    </Col>
                  </Row>
                ))}
              </div>
              <Button className="brand-button">Show More</Button>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Followers;
