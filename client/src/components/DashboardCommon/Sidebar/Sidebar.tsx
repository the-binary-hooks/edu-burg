import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const role = localStorage.getItem("role");
    const dashboardLinks =
        role === "student"
            ? [
                  "Home",
                  "Profile",
                  "Semester Result",
                  "Followers",
                  "Courses",
                  "Your Posts",
                  "Chats",
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
                  "Chats",
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
                  "Your Posts",
                  "Chats",
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
                            <Link
                                to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                                className="text-white"
                            >
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
