import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

interface userInterface {
    _id: string;
    id: string;
    studentName: string;
    role: string;
    email: string;
    gender: string;
    semesterResults?: [
        {
            _id: string;
            comment: string;
            cgpa: string;
            studentId: string;
            semester: string;
            imageURL: string;
            __v: 0;
        }
    ];
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

const SemesterResults = () => {
    const [err, setErr] = useState("");

    const [user, setUser] = useState<userInterface>({} as userInterface);

    const id = localStorage.getItem("id");

    useEffect(() => {
        fetch(`http://localhost:5000/api/auth/getById/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setUser(data.addInfo);
                }
            });
    }, [id]);
    console.log(user);
    console.log(user.semesterResults);

    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10}>
                    <br />
                    <h3 className="brand-text">Your Semester Results</h3>
                    <br />
                    {user.semesterResults?.map((semesterResult) => (
                        <>
                            <br />
                            <Table responsive="sm" key={semesterResult._id}>
                                <thead>
                                    <tr className="brand-text">
                                        <th>Picture</th>
                                        <th>Semester</th>
                                        <th>CGPA</th>
                                        <th>Comment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                src={semesterResult.imageURL}
                                                alt="result"
                                            />
                                        </td>
                                        <td>{semesterResult.semester}</td>
                                        <td>{semesterResult.cgpa}</td>
                                        <td style={{ overflowY: "auto" }}>
                                            {semesterResult.comment}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <br />
                        </>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default SemesterResults;
