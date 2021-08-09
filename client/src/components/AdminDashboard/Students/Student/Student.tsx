import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Props Interface --- typeScript
interface IProps {
    student: {
        status: string;
        semester: string;
        dateOfBirth?: string | undefined;
        payments: [];
        assignments: [];
        courses: [];
        followers: [];
        following: [];
        posts: [];
        comments: [];
        chats: [];
        _id: string;
        id: string;
        studentName: string;
        email: string;
        phone: number;
        department: string;
        session: string;
        program: string;
        FathersName: string;
        MothersName: string;
        FathersMobileNumber: number;
        permanentAddress: string;
        presentAddress: string;
        sscOLevelDakhilInfo: {
            board: string;
            rollNo: string;
            registrationNo: string;
            passingYear: string;
            GPA: string;
        };
        hscALevelAlimDiplomaInfo: {
            board: string;
            rollNo: string;
            registrationNo: string;
            passingYear: string;
            GPA: string;
        };
        gender: string;
        picture: string;
        bio?: string;
        semesterResults: [];
        __v: number;
    };
    active?: boolean;
    inactive?: boolean;
    key?: string;
}

const Student = ({ student, active, inactive }: IProps) => {
    // Initial State
    const [err, setErr] = useState("");

    console.log("hello")
    console.log("student", student);
    // Handle Student Status Change
    const handleStatusChange = (e: any, id: String | null) => {
        const newStatus = active
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
        <div className="follower-container" key={student._id}>
            <Row>
                <Col md={8} className="follower">
                    <img
                        src={student.picture}
                        alt="profilePic"
                        className="profile-pic"
                    />
                    <div>
                        <h5>{student.studentName}</h5>
                        <small>{student.email}</small>
                        <small>{student.bio}</small>
                    </div>
                </Col>
                <Col md={2}>
                    <br />
                    <Button className="brand-button">
                        <FontAwesomeIcon icon={faPlus} className="mx-2" />
                        Follow
                    </Button>
                    <br />
                    <br />
                    <p>{err}</p>
                    <Form.Select
                        aria-label="Active"
                        onChange={(event) =>
                            handleStatusChange(event, student.id)
                        }
                    >
                        <option value="1">
                            {active ? "Active" : "Inactive"}
                        </option>
                        <option value="2">
                            {inactive ? "Active" : "Inactive"}
                        </option>
                    </Form.Select>
                </Col>
            </Row>
        </div>
    );
};

export default Student;
