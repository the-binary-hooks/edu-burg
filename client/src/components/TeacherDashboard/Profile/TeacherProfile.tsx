import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";
import "./Profile.css";

// Params interface --- typeScript
interface IUserPublicProfileRouteParams {
    id: string;
}

interface userInterface {
    _id: string;
    id: string;
    teacherName: string;
    role: string;
    email: string;
    gender: string;
    picture: string;
    bio: string | undefined;
    status: string;
    department: undefined;
}

const TeacherProfile = () => {
    const { id } = useParams<IUserPublicProfileRouteParams>();
    const [user, setUser] = useState<userInterface>({} as userInterface);
    const handleStatusChange = (e: any, email: String | null) => {
        const newStatus = { status: e.target.value };

        fetch(`https://localhost:5000/teacher/updateStatus/${email}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(newStatus),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    useEffect(() => {
        fetch(`http://localhost:5000/api/auth/getById/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setUser(data.addInfo);
                }
            });
    }, [id]);

    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10} style={{ textAlign: "center" }}>
                    <br />
                    <Container>
                        <img
                            src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                            alt="profilePic"
                            className="profile-pic"
                        />
                        <h4 className="brand-text">{user.teacherName}</h4>
                        {localStorage.getItem("role") === "admin" ? (
                            <Form.Select
                                aria-label="Active"
                                onChange={(event) =>
                                    handleStatusChange(
                                        event,
                                        localStorage.getItem("email")
                                    )
                                }
                            >
                                <option value="1">{user.status}</option>
                                <option value="2">
                                    {user.status === "active"
                                        ? "inactive"
                                        : "active"}
                                </option>
                            </Form.Select>
                        ) : (
                            <h6>{user.status}</h6>
                        )}
                        <br />

                        <h6>Department: {user.department}</h6>
                        <p>{user.bio}</p>
                        <small>{user.email}</small>
                        <br />
                        <small>{user.gender}</small>
                        <Button className="brand-button">
                            <FontAwesomeIcon icon={faPlus} /> Follow
                        </Button>
                    </Container>

                    <Table responsive="sm">
                        <thead>
                            <tr className="brand-text">
                                <th>Courses</th>
                                <th>Students Number</th>
                                <th>Posts</th>
                                <th>Followers</th>
                                <th>Following</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13</td>
                                <td>6693</td>
                                <td>55</td>
                                <td>583</td>
                                <td>29</td>
                                <td>4.9</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <br />
                    <h6>Rate this Teacher</h6>
                    <Form.Control type="text" placeholder="5.00" />
                    <div className="rating-button">
                        <Button className="brand-button w-25">Submit</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TeacherProfile;
