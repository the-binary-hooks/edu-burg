// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Button, Container, Form } from "react-bootstrap";
// React Hook form
import { useForm } from "react-hook-form";
// Router
import { Link, useHistory, useLocation } from "react-router-dom";
// CSS
import "../auth.css";
// Font awesome
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Form data interface
interface IFormData {
    username: string;
    email: string;
    password: string;
    confirmPass: string;
}

const Register = () => {
    // Error state
    const [password, setPassword] = useState("");
    // Password variables, in case there is a mismatch
    const [confirmPassword, setConfirmPassword] = useState("");
    const [err, setErr] = useState("");
    // React Hook form variables
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Routing Variables
    let history: any = useHistory();
    let location: any = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    // If the user is already logged in, doesn't make sense to show him/her the register page again
    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.replace(from);
        }
    }, [from, history]);
    // Handle form submit
    const onSubmit = async (data: IFormData) => {
        // If passwords mismatch
        if (password !== confirmPassword) {
            // set password fields empty
            setPassword("");
            setConfirmPassword("");
            // Empty the error after 5 seconds
            setTimeout(() => {
                setErr("");
            }, 5000);
            // Set error
            return setErr("Passwords do not match");
        }

        // Send data to save into DB
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
                    // Save token in local storage
                    localStorage.setItem("authToken", data.token);
                    // Redirect user in the requested route
                    history.replace(from);
                }
            });
    };

    return (
        <div className="login-page">
            <Container className="login-container">
                <h4>Sign Up</h4>
                <FontAwesomeIcon icon={faTimes} size="1x" />
                <br />
                <br />
                <br />
                <br />
                {err && <span className="error">{err}</span>}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            {...register("username", {
                                required: true,
                            })}
                            type="text"
                            placeholder="Enter Your Name"
                        />
                        {errors.username && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                            type="email"
                            placeholder="e.g. johndoe@gmail.com"
                        />
                        {errors.email && (
                            <span className="error">
                                This field is required and must be valid
                            </span>
                        )}
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            {...register("password", {
                                required: true,
                                // pattern:
                                //     /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/,
                            })}
                            type="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && (
                            <span className="error">
                                This field is required, must contain at least 6
                                characters, 1 uppercase and 1 lowercase letters
                            </span>
                        )}
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            {...register("confirmPass", {
                                required: true,
                                // pattern:
                                //     /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/,
                            })}
                            type="password"
                            placeholder="Your Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPass && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />
                    <Button type="submit" className="submit-button">
                        Register
                    </Button>
                    <div className="accountDiv">
                        <p>
                            Already have an account?{" "}
                            <Link className="react-link" to="/login">
                                Login
                            </Link>
                        </p>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Register;
