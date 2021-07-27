import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5">
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
                    <Link to="/dashboard/Newsfeed" className="text-white">
                        <span>Newsfeed</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/admission" className="text-white">
                        <span>Admission</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addteacher" className="text-white">
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
                        to="/dashboard/add departments"
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
    );
};

export default Sidebar;
