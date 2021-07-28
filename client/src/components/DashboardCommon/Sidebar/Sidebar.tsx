import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const role = sessionStorage.getItem("role");
    const dashboardLinks =
        role === "student"
            ? [
                  "Home",
                  "Profile",
                  "Semester Result",
                  "Followers",
                  "Courses",
                  "You Posts",
                  "Chatting",
                  "Payment history",

                  "News Feed",
                  "Submit Assignments",
              ]
            : role === "teacher"
            ? [
                  "Home",
                  "Profile",
                  "Followers",
                  "Courses",
                  "Your Posts",
                  "Chatting",
                  "Publish Result",
                  "News Feed",
              ]
            : [
                  "Home",
                  "Add a teacher",
                  "Admission",
                  "Add A Course",
                  "Add Departments",
                  "News Feed",
                  "Make Admin",
                  "Student Reviews",
                  "Add A Post",
                  "Chatting",
              ];

    return (
        <Col md={2} className="column">
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
                                <strong>{role}</strong>
                            </span>
                        </Link>
                    </li>
                    {dashboardLinks.map((link, index) => (
                        <li key={index}>
                            <Link to="/dashboard" className="text-white">
                                <span>{link}</span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/" className="text-white">
                            <span>Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </Col>
    );
};

export default Sidebar;
