// React Bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// React Hook Form
import { useForm } from "react-hook-form";
// React
import { useState } from "react";
// Axios
import axios from "axios";
// Components
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

// Form data interface -- typescript
interface IFormData {
    studentId: string;
    semester: "1st" | "2nd" | "3rd" | "4th";
    cgpa: string;
    comment: string;
}

const PublishResult = () => {
    // Initial states
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);

    // React Router Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle Form Submit
    const onSubmit = (data: IFormData) => {
        const { comment, cgpa, studentId, semester } = data;
        const result = { comment, cgpa, studentId, semester, imageURL };

        fetch("http://localhost:5000/api/teacher/publishResult", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(result),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success === true) {
                    alert("Your result has been added successfully!!");
                    window.location.reload();
                } else {
                    setError(result.message);
                }
            });
    };

    // handles imgbb image upload
    const handleImageUpload = (event: any) => {
        const imageData = new FormData();
        imageData.set("key", "b238360b7dd6273493645ed46cb79ec6");
        if (event.target.files[0]) {
            imageData.append("image", event.target.files[0]);
            axios
                .post("https://api.imgbb.com/1/upload", imageData)
                .then((res: any) => {
                    setImageURL(res.data.data.display_url);
                })
                .catch((err: any) => {
                    setError(err);
                });
        }
    };

    return (
        <Container fluid data-testid="container">
            <Row>
                <Sidebar />
                <Col md={10} className="p-5 blue-text fw-bold">
                    <h3 className="brand-text">Publish Student Result</h3>
                    <br />

                    {/* Student ID */}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>Student Id</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Student Id"
                                {...register("studentId", { required: true })}
                            />
                            {errors.studentId && (
                                <span className="error">
                                    This field is required
                                </span>
                            )}
                        </Form.Group>
                        <br />

                        {/* CGPA */}
                        <Form.Group>
                            <Form.Label>CGPA</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="cgpa"
                                {...register("cgpa", { required: true })}
                            />
                            {errors.cgpa && (
                                <span className="error">
                                    This field is required
                                </span>
                            )}
                        </Form.Group>
                        <br />

                        {/* Semester */}
                        <Form.Group>
                            <Form.Label>Semester</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="semester"
                                {...register("semester", { required: true })}
                            />
                            {errors.semester && (
                                <span className="error">
                                    This field is required
                                </span>
                            )}
                        </Form.Group>
                        <br />

                        {/* Result Image */}
                        <Form.Group>
                            <Form.Label>Upload Result Image</Form.Label>
                            <br />
                            <Form.Control
                                type="file"
                                placeholder="Upload Image"
                                onChange={handleImageUpload}
                            />
                        </Form.Group>
                        <br />

                        {/* Comment About Result */}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                {...register("comment", { required: true })}
                            />
                            {errors.comment && (
                                <span className="error">
                                    This field is required
                                </span>
                            )}
                        </Form.Group>
                        <br />

                        {/* Submit Button */}
                        {imageURL ? (
                            <Button className="brand-button" type="submit">
                                Publish
                            </Button>
                        ) : (
                            <p data-testid="pOnNoURL">
                                You will be able to submit this form as soon as
                                your image is ready to be uploaded.
                            </p>
                        )}
                    </Form>

                    {/* Error In case it occurs */}
                    <p>{error}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default PublishResult;
