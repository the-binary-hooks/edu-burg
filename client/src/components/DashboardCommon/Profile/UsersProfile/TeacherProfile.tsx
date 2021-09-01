// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
// React Router
import { Link, useParams } from "react-router-dom";
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
    courses: [
        {
            courseTitle: string;
            courseCode: string;
            courseTeacher: string;
            courseStudents: [string];
            department: string;
        }
    ];
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
        fetch(`/api/auth/getById/${id}`)
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
        fetch(`/api/teacher/updateStatus/${id}`, {
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

    console.log(teacher);
    return (
        <Container fluid data-testid="container">
            <Row>
                <Sidebar />
                <Col md={10} style={{ textAlign: "center" }}>
                    <br />
                    <Container>
                        <div className="row justify-content-center ">
                            <div className=' col-sm-5 col-md-4 col-lg-3 text-start '>
                                <img
                                    src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
                                    alt="profilePic"
                                    className="profile-pic" style={{width: '95%'}}
                                />
                            </div>
                            <div className='col-sm-6 col-md-5 col-lg-6 '>
                                <p>{err}</p>
                                <h4 className="brand-text mt-5">{teacher.teacherName}</h4>
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
                            </div>


                        </div>

                    </Container>

                    <Table responsive="sm" style={{marginTop: "50px"}}>
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
                                <td>
                                    <Link to="/courses">
                                        {teacher?.courses?.length}
                                    </Link>
                                </td>
                                <td>6693</td>
                                <td>
                                    <Link to="/your-posts">55</Link>
                                </td>
                                <td>
                                    <Link to="/followers">583</Link>
                                </td>
                                <td>
                                    <Link to="/followers">29</Link>
                                </td>
                                <td>4.9</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <br />
                    {/* <h6>Rate this Teacher</h6> */}
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Rate this Teacher
                            </Form.Label>
                            <Col xs={7}>
                                <Form.Control type="text" placeholder="5.00" />
                            </Col>
                            <Col xs="auto" className="rating-button my-1">
                                <Button className="brand-button" style={{ marginTop: 0 }}>Submit</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                    {/* <Form.Control type="text" placeholder="5.00" />
                    <div className="rating-button">
                        <Button className="brand-button w-25">Submit</Button>
                    </div> */}
                </Col>
            </Row>
        </Container>
    );
};

export default TeacherProfile;
