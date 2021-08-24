import { Card, Col } from "react-bootstrap";
// React Router
import { useHistory } from "react-router-dom";

// courses array interface -- typeScript
interface ICourses {
    course: {
        courseCode: string;
        courseStudents: { studentName: string; _id: string }[];
        courseTeacher: { teacherName: string };
        courseTitle: string;
        department: string;
        __v: number;
        _id: string;
    };
}

const ListCourse = ({ course }: ICourses) => {
    console.log(course, "========");

    // React Router vars
    const history = useHistory();
    return (
        <Col
            key={course._id}
            md={6}
            onClick={() => history.push(`/course/${course._id}`)}
        >
            <Card className="card">
                <Card.Body>
                    <Card.Title className="brand-text">
                        {course.courseTitle}
                    </Card.Title>
                    <Card.Text>
                        <p className="text-secondary">
                            {course.courseTeacher?.teacherName}
                        </p>
                        {course.courseStudents?.map((student, index) => (
                            <small key={index}>{student.studentName}</small>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ListCourse;
