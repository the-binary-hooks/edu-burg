// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Button, Container, Form } from "react-bootstrap";
// React Hook form
import { useForm } from "react-hook-form";
// Router
import { Link, useHistory, useLocation } from "react-router-dom";
// CSS
import "./Login.css";
// Font Awesome
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IFormData {
    email: string;
    password: string;
}

const Login = () => {
    // Error State
    const [err, setErr] = useState("");

    // Routing vars
    let history: any = useHistory();
    let location: any = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    // If the user is already logged in, doesn't make sense to show him/her the login page again
    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.replace(from);
        }
    }, [from, history]);

    // React Hook form vars
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle submit
    const onSubmit = async (data: IFormData) => {
        // Send request to get JWT token
        fetch("", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === false) {
                    // Set error
                    setErr(data.error);
                    // Empty the error after 5 seconds
                    setTimeout(() => {
                        setErr("");
                    }, 5000);
                } else {
                    // Save token in the local storage
                    localStorage.setItem("authToken", data.token);
                    // Redirect user in the requested route
                    history.replace(from);
                }
            });
    };
    return (
        <div className="login-page">
            <Container className="login-container">
                <div className="login-container-div">
                    <h4 className="underlineHeading">Sign In</h4>
                    <FontAwesomeIcon icon={faTimes} size="1x" />
                    <br />
                    <br />
                    {err && <span className="error">{err}</span>}
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                        className="login-form"
                    >
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="e.g. johndoe@gmail.com"
                                {...register("email", {
                                    required: true,
                                    pattern:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                            />
                            {errors.email && (
                                <span className="error">
                                    This field is required
                                </span>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Your Password"
                                {...register("password", {
                                    required: true,
                                    // pattern:
                                    //     /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/,
                                })}
                            />
                            {errors.password && (
                                <span className="error">
                                    This field is required
                                </span>
                            )}
                        </Form.Group>
                        <Button type="submit" className="submit-button">
                            Login
                        </Button>
                        <div className="accountDiv">
                            <p>
                                Don't have an account?{" "}
                                <Link className="react-link" to="/register">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Login;
