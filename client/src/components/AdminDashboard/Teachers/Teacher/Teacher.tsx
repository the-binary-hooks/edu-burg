import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

interface IProps {
    teacher: {
        rating: number;
        status: string;
        courses: [];
        followers: [];
        following: [];
        posts: [];
        comments: [];
        chats: [];
        _id: string;
        id: string;
        bio: string;
        teacherName: string;
        email: string;
        phone: number;
        gender: string;
        picture: string;
        __v: number;
    };
    active?: boolean;
    inactive?: boolean;
    key: string;
}

const Teacher = ({ teacher, active, inactive }: IProps) => {
    const [err, setErr] = useState("");
    const handleStatusChange = (e: any, id: String | null) => {
        const newStatus = active
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
        <div className="follower-container" key={teacher._id}>
            <Row>
                <Col md={8} className="follower">
                    <img
                        src={teacher.picture}
                        alt="profilePic"
                        className="profile-pic"
                    />
                    <div>
                        <h5>{teacher.teacherName}</h5>
                        <small>{teacher.email}</small>
                        <small>{teacher.bio}</small>
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
                            handleStatusChange(event, teacher.id)
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

export default Teacher;
