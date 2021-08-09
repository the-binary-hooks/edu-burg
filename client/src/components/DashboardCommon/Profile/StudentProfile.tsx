import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";

// Params interface --- typeScript
interface IUserPublicProfileRouteParams {
    id: string;
}

interface userInterface {
    _id: string;
    id: string;
    studentName: string;
    role: string;
    email: string;
    gender: string;
    picture: string;
    bio: string | undefined;
    status: string;
    department: undefined | string;
    semester: string;
    session: string;
    program: string;
    FathersName: string;
    MothersName: string;
}

const TeacherProfile = () => {
    const [err, setErr] = useState("");
    const { id } = useParams<IUserPublicProfileRouteParams>();
    const [user, setUser] = useState<userInterface>({} as userInterface);

    useEffect(() => {
        fetch(`http://localhost:5000/api/auth/getById/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setUser(data.addInfo);
                }
            });
    }, [id]);

    const handleStatusChange = (e: any, id: String | null) => {
        const newStatus =
            user.status === "active"
                ? e.target.value === "1"
                    ? "active"
                    : "inactive"
                : e.target.value === "1"
                ? "inactive"
                : "active";
        fetch(`http://localhost:5000/api/student/updateStatus/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ status: newStatus }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === false) {
                    setErr(data.message);
                }
            });
    };

    return (
        <Container fluid data-testid="container">
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
                        <h4 className="brand-text">{user.studentName}</h4>
                        <p>{err}</p>
                        {localStorage.getItem("role") === "admin" ? (
                            <Form.Select
                                aria-label="Active"
                                onChange={(event) =>
                                    handleStatusChange(event, user.id)
                                }
                            >
                                <option value="1">
                                    {user.status === "active"
                                        ? "Active"
                                        : "Inactive"}
                                </option>
                                <option value="2">
                                    {user.status === "inactive"
                                        ? "Active"
                                        : "Inactive"}
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
                        <p>Semester: {user.semester}</p>
                        <p>Session: {user.session}</p>
                        <p>Program: {user.program}</p>
                        <p>Father's Name: {user.FathersName}</p>
                        <p>Mother's Name: {user.MothersName}</p>
                        <Button className="brand-button">
                            <FontAwesomeIcon icon={faPlus} /> Follow
                        </Button>
                    </Container>

                    <Table responsive="sm">
                        <thead>
                            <tr className="brand-text">
                                <th>Courses</th>
                                <th>Classes</th>
                                <th>Assignments</th>
                                <th>Posts</th>
                                <th>Followers</th>
                                <th>Following</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13</td>
                                <td>45</td>
                                <td>87</td>
                                <td>55</td>
                                <td>583</td>
                                <td>29</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <br />
                    <br />
                </Col>
            </Row>
        </Container>
    );
};

export default TeacherProfile;
