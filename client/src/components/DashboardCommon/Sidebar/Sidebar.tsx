// React
import { useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Sidebar.css";
import axios from "axios";
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

        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    }, [isOpen]);

    useEffect(() => {
        if (window.innerWidth < 760 && !menuShows) {
            setMenuShows(true);
        }
    }, [setMenuShows, menuShows]);

    // JWT Token
    const token = localStorage.getItem("authToken");

    // Private data fetched
    const [privateData, setPrivateData] = useState("");

    // Router var
    let history = useHistory();

    // Role
    const role = localStorage.getItem("role");

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
                localStorage.removeItem("authToken");
                localStorage.removeItem("role");
                history.replace("/login");
            }
        };
        if (localStorage.getItem("authToken")) fetchPrivateData();
        else {
            localStorage.removeItem("authToken");
            localStorage.removeItem("role");
            localStorage.clear();
            history.replace("/login");
        }
    }, [token, history]);

    // Logout
    const handleLogout = () => {
        localStorage.clear();
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
                  "Semester Result",
                  "Followers",
                  "Courses",
                  "Your Posts",
                  "Chats",
                  "Payment history",
                  "News Feed",
                  "Submit Assignments",
              ];

    return (
        <Col md={2} className="column">
            <div
                className={
                    menuShows
                        ? "menu d-flex flex-column justify-content-between py-3"
                        : "d-none"
                }
                onClick={toggle}
            >
                <Row style={{ margin: 0 }}>
                    <div className="col-7">
                        <ul className="ul">
                            <li>
                                <Link to="/" className="text-white">
                                    <img
                                        src="https://demo.wpjobster.com/wp-content/uploads/2020/04/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"
                                        alt="admin"
                                        className="profile-photo"
                                    />
                                    <span>
                                        <strong>
                                            {role === "admin"
                                                ? localStorage.getItem(
                                                      "adminName"
                                                  )
                                                : role === "teacher"
                                                ? localStorage.getItem(
                                                      "teacherName"
                                                  )
                                                : localStorage.getItem(
                                                      "studentName"
                                                  )}
                                        </strong>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
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
                {isOpen && (
                    <ul className="menu-link-list">
                        {dashboardLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={`/${link
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                >
                                    <span>{link}</span>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link to="/login" onClick={handleLogout}>
                                <span>Sign Out</span>
                            </Link>
                        </li>
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
                {/* {privateData && ( */}
                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-white">
                            <img
                                src="https://demo.wpjobster.com/wp-content/uploads/2020/04/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"
                                alt="admin"
                            />
                            <br />
                            <span>
                                <strong>
                                    {role === "admin"
                                        ? localStorage.getItem("adminName")
                                        : role === "teacher"
                                        ? localStorage.getItem("teacherName")
                                        : localStorage.getItem("studentName")}
                                </strong>
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
                        <Link
                            to="/login"
                            className="text-white"
                            onClick={handleLogout}
                        >
                            <span>Sign Out</span>
                        </Link>
                    </li>
                </ul>
                {/* )} */}
            </div>
        </Col>
    );
};

export default Sidebar;
