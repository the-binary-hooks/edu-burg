//React bootstrap

import { Col, Container, Row, Table } from "react-bootstrap"
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar"
import Assignments from "./Assignments"

const AllAssignment = () => {
    const fakeAssignment = [
        {
            "id":1,
            "code":1,
            "link":"link.com"
        },
        {
            "id":2,
            "code":2,
            "link":"link2.com"
        },
        {
            "id":3,
            "code":3,
            "link":"link3.com"
        },
        {
            "id":4,
            "code":4,
            "link":"link4.com"
        },
     
    ]
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <Col md={10}>
                    <br />
                    <h1 className="brand-text">All Assignments</h1>
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student Name</th>
                                <th>Course Code</th>
                                <th>Assignment Links</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                               fakeAssignment.map(data => <Assignments></Assignments>)
                           }
                        </tbody>
                    </Table>

                </Col>
            </Row>

        </Container>
    )
}

export default AllAssignment
