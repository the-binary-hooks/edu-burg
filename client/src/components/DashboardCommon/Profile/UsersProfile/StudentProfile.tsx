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
interface IStudentPublicProfileRouteParams {
    id: string;
}

// Student Interface
interface studentInterface {
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

const StudentProfile = () => {
    // Initial States
    const [err, setErr] = useState("");
    const [student, setStudent] = useState<studentInterface>(
        {} as studentInterface
    );

    // Param Var
    const { id } = useParams<IStudentPublicProfileRouteParams>();

    // Fetch the student with Id
    useEffect(() => {
        fetch(`http://localhost:5000/api/auth/getById/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setStudent(data.addInfo);
                }
            });
    }, [id]);

    // Handle student's status change
    const handleStatusChange = (e: any, id: String | null) => {
        const newStatus =
            student.status === "active"
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
                        <h4 className="brand-text">{student.studentName}</h4>
                        <p>{err}</p>
                        {localStorage.getItem("role") === "admin" ? (
                            <Form.Select
                                aria-label="Active"
                                onChange={(event) =>
                                    handleStatusChange(event, student.id)
                                }
                            >
                                <option value="1">
                                    {student.status === "active"
                                        ? "Active"
                                        : "Inactive"}
                                </option>
                                <option value="2">
                                    {student.status === "inactive"
                                        ? "Active"
                                        : "Inactive"}
                                </option>
                            </Form.Select>
                        ) : (
                            <h6>{student.status}</h6>
                        )}
                        <br />

                        <h6>Department: {student.department}</h6>
                        <p>{student.bio}</p>
                        <small>{student.email}</small>
                        <br />
                        <small>{student.gender}</small>
                        <p>Semester: {student.semester}</p>
                        <p>Session: {student.session}</p>
                        <p>Program: {student.program}</p>
                        <p>Father's Name: {student.FathersName}</p>
                        <p>Mother's Name: {student.MothersName}</p>
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

export default StudentProfile;
