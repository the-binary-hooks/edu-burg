// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
// React Router
import { useParams } from "react-router-dom";
// Components
import Sidebar from "../../Sidebar/Sidebar";
// CSS
import "../Profile/Profile.css";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Params interface --- typeScript
interface ITeacherPublicProfileRouteParams {
    id: string;
}

// Teacher interface
interface teacherInterface {
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
    // Initial States
    const [err, setErr] = useState("");
    const [teacher, setTeacher] = useState<teacherInterface>(
        {} as teacherInterface
    );

    // Param Vars
    const { id } = useParams<ITeacherPublicProfileRouteParams>();

    // Fetch teacher with this Id
    useEffect(() => {
        fetch(`http://localhost:5000/api/auth/getById/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setTeacher(data.addInfo);
                }
            });
    }, [id]);

    // Handle teacher's status change
    const handleStatusChange = (e: any, id: String | null) => {
        const newStatus =
            teacher.status === "active"
                ? e.target.value === "1"
                    ? "active"
                    : "inactive"
                : e.target.value === "1"
                ? "inactive"
                : "active";
        fetch(`http://localhost:5000/api/teacher/updateStatus/${id}`, {
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
                        <p>{err}</p>
                        <h4 className="brand-text">{teacher.teacherName}</h4>
                        {sessionStorage.getItem("role") === "admin" ? (
                            <Form.Select
                                aria-label="Active"
                                onChange={(event) =>
                                    handleStatusChange(event, teacher.id)
                                }
                            >
                                <option value="1">
                                    {teacher.status === "active"
                                        ? "Active"
                                        : "Inactive"}
                                </option>
                                <option value="2">
                                    {teacher.status === "inactive"
                                        ? "Active"
                                        : "Inactive"}
                                </option>
                            </Form.Select>
                        ) : (
                            <h6>{teacher.status}</h6>
                        )}
                        <br />
                        <h6>Department: {teacher.department}</h6>
                        <p>{teacher.bio}</p>
                        <small>{teacher.email}</small>
                        <br />
                        <small>{teacher.gender}</small>
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
