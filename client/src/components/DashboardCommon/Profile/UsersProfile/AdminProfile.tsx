// React
import { useState, useEffect } from "react";
// React Bootstrap
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
// React Router
import { useParams } from "react-router-dom";
// Components
import Sidebar from "../../Sidebar/Sidebar";
// CSS
import "./Profile.css";
// Font Awesome
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Params interface --- typeScript
interface IAdminPublicProfileRouteParams {
    id: string;
}

// Admin Interface
interface adminInterface {
    _id: string;
    id: string;
    adminName: string;
    role: string;
    email: string;
    gender: string;
    picture: string;
    bio: string | undefined;
}

const AdminProfile = () => {
    // Param Var
    const { id } = useParams<IAdminPublicProfileRouteParams>();
    // Initial State
    const [admin, setAdmin] = useState<adminInterface>({} as adminInterface);

    // Fetch the admin with the Id
    useEffect(() => {
        fetch(`http://localhost:5000/api/auth/getById/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setAdmin(data.addInfo);
                }
            });
    }, [id]);

    return (
        <Container fluid data-testid="container">
            <Row>
                <Sidebar />
                <Col md={10} style={{ textAlign: "center" }}>
                    <br />
                    <Container>
                        <img
                            src={admin.picture}
                            alt="profilePic"
                            className="profile-pic"
                        />
                        <h4 className="brand-text">{admin.adminName}</h4>
                        <p>{admin.bio}</p>
                        <small>{admin.email}</small>
                        <br />
                        <small>{admin.gender}</small>
                        <Button className="brand-button">
                            <FontAwesomeIcon icon={faPlus} /> Follow
                        </Button>
                    </Container>

                    <Table responsive="sm">
                        <thead>
                            <tr className="brand-text">
                                <th>Courses</th>
                                <th>Posts</th>
                                <th>Followers</th>
                                <th>Following</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13</td>
                                <td>55</td>
                                <td>583</td>
                                <td>29</td>
                                <td>4.9</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <br />
                    <h6>Rate Admin</h6>
                    <Form.Control type="text" placeholder="5.00" />
                    <div className="rating-button">
                        <Button className="brand-button w-25">Submit</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminProfile;
