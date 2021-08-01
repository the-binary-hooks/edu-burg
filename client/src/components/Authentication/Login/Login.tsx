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
// Font Awesome
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Form data interface
interface IFormData {
    id: string;
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

    console.log(errors);
    // Handle submit
    const onSubmit = async (data: IFormData) => {
        // Send request to get JWT token
        fetch("http://localhost:5000/api/auth/login", {
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
                    localStorage.setItem("role", data.role);
                    localStorage.setItem("name", data.name);
                    // Redirect user in the requested route
                    history.replace(from);
                }
            });
    };

    return (
        <div className="brand-text login-page">
            <Container className="login-container">
                <h4>Sign In</h4>
                <FontAwesomeIcon icon={faTimes} size="1x" />
                <br />
                <br />
                {err && <span className="error">{err}</span>}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Your Registration ID</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0000"
                            {...register("id", {
                                required: true,
                            })}
                        />
                        {errors.id && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Your Password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        {errors.password && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <Button
                        type="submit"
                        className="submit-button brand-button"
                    >
                        Login
                    </Button>
                    <div className="accountDiv">
                        <p>
                            Don't have an account?
                            <Link
                                className="react-link brand-text"
                                to="/register"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Login;
