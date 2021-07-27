import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
    return (
        <Col md={2}>
            <div className="sidebar d-flex flex-column justify-content-between py-5">
                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-white">
                            <img
                                src="https://demo.wpjobster.com/wp-content/uploads/2020/04/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"
                                alt="admin"
                            />
                            <br />
                            <span>
                                <strong>Admin</strong>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/NewsFeed" className="text-white">
                            <span>Newsfeed</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/admission" className="text-white">
                            <span>Admission</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addTeacher" className="text-white">
                            <span>Add Teacher</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addcourse" className="text-white">
                            <span>Add Course</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/addDepartments"
                            className="text-white"
                        >
                            <span>Add Departments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/lists" className="text-white">
                            <span>Lists</span>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link to="/" className="text-white">
                        {" "}
                        <span>Signout</span>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Sidebar;
