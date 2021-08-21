// React Bootstrap
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

// Components
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";
import ListCourse from "./ListCourse";

// courses array interface -- typeScript
interface ICourses {
    courseCode: string;
    courseStudents: { studentName: string; _id: string }[];
    courseTeacher: { teacherName: string };
    courseTitle: string;
    department: string;
    __v: number;
    _id: string;
}

const CoursesAssigned = () => {
    const [courses, setCourses] = useState<ICourses[]>([]);
    const [courseId, setCourseId] = useState("");
    const userInfo = {
        id: sessionStorage.getItem("_id"),
        role: sessionStorage.getItem("role"),
    };

    useEffect(() => {
        fetch(`/api/${userInfo.role}/getCourses/${userInfo.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ role: userInfo.role }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result[0].courses);
                setCourses(data.result[0].courses);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userInfo.id, userInfo.role]);

    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10}>
                    <br />
                    <h1 className="brand-text">Your Courses</h1>
                    <br />
                    <Row>
                        {courses.map((course) => (
                            <ListCourse course={course} />
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default CoursesAssigned;