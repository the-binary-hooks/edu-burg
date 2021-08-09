import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// Components
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";
import Teacher from "./Teacher/Teacher";

// teachers interface --- typeScript
interface ITeachers {
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
}

const Teachers = () => {
    // Initial State
    const [teachers, setTeachers] = useState<ITeachers[]>([]);

    // Fetch all the teachers
    useEffect(() => {
        fetch("http://localhost:5000/api/teacher/getAll")
            .then((res) => res.json())
            .then((data) => setTeachers(data));
    }, []);

    return (
        <Container fluid data-testid="container">
            <Row>
                <Sidebar />
                <Col md={10}>
                    <div>
                        <div className="text-center mb-5">
                            <br />
                            <h3 className="brand-text">Active</h3>
                        </div>

                        {teachers
                            .filter((teacher) => teacher.status === "active")
                            .map((teacher) => (
                                <Teacher
                                    teacher={teacher}
                                    active
                                    key={teacher.id}
                                />
                            ))}

                        <Button className="brand-button">Show More</Button>
                    </div>
                    <br />
                    <div>
                        <div className="text-center mb-3">
                            <h3 className="brand-text">Inactive</h3>
                        </div>
                        {teachers
                            .filter((teacher) => teacher.status === "inactive")
                            .map((teacher) => (
                                <Teacher
                                    teacher={teacher}
                                    inactive
                                    key={teacher.id}
                                />
                            ))}
                        <Button className="brand-button">Show More</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Teachers;
