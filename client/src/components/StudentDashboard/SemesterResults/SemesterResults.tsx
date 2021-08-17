// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Col, Container, Row, Table } from "react-bootstrap";
// Components
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

// Interface of a student
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
    // Initial States
    const [err, setErr] = useState("");
    const [user, setUser] = useState<userInterface>({} as userInterface);

    // Local storage item
    const id = sessionStorage.getItem("id");

    useEffect(() => {
        fetch(`/api/auth/getById/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setUser(data.addInfo);
                } else {
                    setErr(data.err.message);
                }
            });
    }, [id]);

    return (
        <Container fluid data-testid="container">
            <Row>
                <Sidebar />
                <Col md={10}>
                    <br />
                    <h3 className="brand-text" data-testid="heading">
                        Your Semester Results
                    </h3>

                    {/* Error In case it occurs */}
                    <p>{err}</p>

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
                                        <td data-testid="tableData">
                                            <img
                                                src={semesterResult.imageURL}
                                                alt="result"
                                            />
                                        </td>
                                        <td data-testid="tableData">
                                            {semesterResult.semester}
                                        </td>
                                        <td data-testid="tableData">
                                            {semesterResult.cgpa}
                                        </td>
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
