// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Col, Row } from "react-bootstrap";
// React Router
import { Link, useHistory } from "react-router-dom";
// CSS
import "./Sidebar.css";
// Axios
import axios from "axios";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    // Initial value of if the dropdown is open
    const [isOpen, setIsOpen] = useState(false);
    const [menuShows, setMenuShows] = useState(false);
    // toggle the dropdown
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    // If the device width is greater than 760, set the state to false
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 760 && isOpen) {
                setIsOpen(false);
                setMenuShows(false);
            } else {
                setIsOpen(true);
                setMenuShows(true);
            }
        };

        // on resize, hide the menu
        window.addEventListener("resize", hideMenu);

        // Remove Event Listener on component un-mount
        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    }, [isOpen]);

    // Show menu
    useEffect(() => {
        if (window.innerWidth < 760 && !menuShows) {
            setMenuShows(true);
        }
    }, [setMenuShows, menuShows]);

    // JWT Token
    const token = sessionStorage.getItem("authToken");

    // Private data fetched
    const [privateData, setPrivateData] = useState("");

    // Router var
    let history = useHistory();

    // Role
    const role = sessionStorage.getItem("role");

    // Fetch data
    useEffect(() => {
        const fetchPrivateData = async () => {
            // Config to send to the server
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const { data } = await axios.get(
                    "http://localhost:5000/api/private",
                    config
                );
                setPrivateData(data.data);
            } catch (err) {
                // Error means the token in the local storage is not valid
                sessionStorage.clear();
                history.replace("/login");
            }
        };
        if (sessionStorage.getItem("authToken")) fetchPrivateData();
        else {
            sessionStorage.clear();
            history.replace("/login");
        }
    }, [token, history]);

    // Logout
    const handleLogout = () => {
        sessionStorage.clear();
        history.replace("/login");
    };

    const dashboardLinks =
        role === "admin"
            ? [
                  "Home",
                  "Profile",
                  "Add a teacher",
                  "Admission",
                  "Add A Course",
                  "Add Departments",
                  "News Feed",
                  "Make Admin",
                  "Student Reviews",
                  "Your Posts",
                  "Chats",
                  "Teachers",
                  "Students",
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
                  "Profile",
                  "Semester Results",
                  "Followers",
                  "Courses",
                  "Your Posts",
                  "Chats",
                  "Payment history",
                  "News Feed",
                  "Submit Assignments",
              ];

    return (
        <Col md={2} className="column" data-testid="sidebar">
            <div
                className={
                    menuShows
                        ? "menu d-flex flex-column justify-content-between py-3"
                        : "d-none"
                }
                onClick={toggle}
            >
                <Row style={{ margin: 0 }}>
                    {/* When the menu shows; that means it is in smaller device && the menu is not open */}
                    <div className="col-7">
                        <ul className="ul">
                            <Link to="/" className="react-link text-white fs-5">
                                <li>
                                    <img
                                        src="https://demo.wpjobster.com/wp-content/uploads/2020/04/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"
                                        alt="admin"
                                        className="profile-photo"
                                    />
                                    <span>
                                        <strong>
                                            {role === "admin"
                                                ? sessionStorage.getItem(
                                                      "adminName"
                                                  )
                                                : role === "teacher"
                                                ? sessionStorage.getItem(
                                                      "teacherName"
                                                  )
                                                : sessionStorage.getItem(
                                                      "studentName"
                                                  )}
                                        </strong>
                                    </span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    {/* When the menu shows; that means it is in smaller device && the menu is open */}
                    <div className="col-4">
                        {isOpen ? (
                            <FontAwesomeIcon
                                icon={faTimes}
                                color="white"
                                className="barIcon"
                                size="2x"
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faBars}
                                color="white"
                                className="barIcon"
                                size="2x"
                            />
                        )}
                    </div>
                </Row>
                {/* When the menu shows; that means it is in smaller device && the menu is open && privateData is available; that means the user is authenticated */}
                {isOpen && privateData && (
                    <ul className="menu-link-list">
                        {dashboardLinks.map((link, index) =>
                            link === "Profile" ? (
                                <Link
                                    key={index}
                                    className="react-link text-white fs-5"
                                    to={`/profile/${sessionStorage.getItem(
                                        "_id"
                                    )}`}
                                >
                                    <li>
                                        <span>{link}</span>
                                    </li>
                                </Link>
                            ) : (
                                <Link
                                    key={index}
                                    className="react-link text-white fs-5"
                                    to={`/${link
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                >
                                    <li>
                                        <span>{link}</span>
                                    </li>
                                </Link>
                            )
                        )}
                        <Link
                            className="react-link text-white fs-5"
                            to="/login"
                            onClick={handleLogout}
                        >
                            <li>
                                <span>Sign Out</span>
                            </li>
                        </Link>
                    </ul>
                )}
            </div>
            <div
                className={
                    menuShows
                        ? "d-none"
                        : "sidebar d-flex flex-column justify-content-between py-5"
                }
            >
                {/* In large devices, when privateData is available */}
                {privateData && (
                    <ul className="list-unstyled">
                        <Link to="/" className="react-link text-white fs-5">
                            <li>
                                <img
                                    src="https://demo.wpjobster.com/wp-content/uploads/2020/04/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"
                                    alt="admin"
                                />
                                <br />
                                <span>
                                    <strong>
                                        {role === "admin"
                                            ? sessionStorage.getItem(
                                                  "adminName"
                                              )
                                            : role === "teacher"
                                            ? sessionStorage.getItem(
                                                  "teacherName"
                                              )
                                            : sessionStorage.getItem(
                                                  "studentName"
                                              )}
                                    </strong>
                                </span>
                            </li>
                        </Link>
                        {dashboardLinks.map((link, index) =>
                            link === "Profile" ? (
                                <Link
                                    className="react-link text-white fs-5"
                                    key={index}
                                    to={`/profile/${sessionStorage.getItem(
                                        "id"
                                    )}`}
                                >
                                    <li>
                                        <span>{link}</span>
                                    </li>
                                </Link>
                            ) : (
                                <Link
                                    className="react-link text-white fs-5"
                                    key={index}
                                    to={`/${link
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                >
                                    <li>
                                        <span>{link}</span>
                                    </li>
                                </Link>
                            )
                        )}
                        <Link
                            to="/login"
                            className="text-white react-link text-white fs-5"
                            onClick={handleLogout}
                        >
                            <li>
                                <span data-testid="list">Sign Out</span>
                            </li>
                        </Link>
                    </ul>
                )}
            </div>
        </Col>
    );
};

export default Sidebar;
