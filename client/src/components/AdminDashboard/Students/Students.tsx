import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";
import Student from "./Student/Student";

// students interface --- typeScript
interface IStudents {
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
}

const Students = () => {
    const [students, setStudents] = useState<IStudents[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/student/getAll")
            .then((res) => res.json())
            .then((data) => setStudents(data));
    }, []);

    console.log(students)
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

                        {students
                            .filter((student) => student.status === "active")
                            .map((student) => (
                                <Student
                                    student={student}
                                    active
                                    key={student.id}
                                />
                            ))}

                        <Button className="brand-button">Show More</Button>
                    </div>
                    <br />
                    <div>
                        <div className="text-center mb-3">
                            <h3 className="brand-text">Inactive</h3>
                        </div>
                        {students
                            .filter((student) => student.status === "inactive")
                            .map((student) => (
                                <Student
                                    student={student}
                                    inactive
                                    key={student.id}
                                />
                            ))}
                        <Button className="brand-button">Show More</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Students;
