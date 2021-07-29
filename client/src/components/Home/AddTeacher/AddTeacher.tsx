import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

// Form data Interface --- typescript
interface IFormData {}

const AddTeacher = () => {
    // const teacher = await Teacher.create(req.body);

    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);

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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {
        const { teacherName, email, password, phone, id, department, male } =
            data;
        const teacher = {
            id,
            teacherName,
            email,
            password,
            phone,
            department,
            gender: male ? "male" : "female",
            picture: imageURL,
        };

        fetch("http://localhost:5000/api/teacher/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(teacher),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert("Your teacher has been registered successfully!!");
                    window.location.reload();
                }
            });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div
                    className="col-md-10 mt-5 shadow m-auto px-3 py-4"
                    style={{ maxWidth: "900px" }}
                >
                    <h2 className="text-center pt-4">Add Teacher</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-3">
                                <label htmlFor="teacher-id">ID</label>
                                <input
                                    {...register("id", {
                                        required: true,
                                    })}
                                    type="number"
                                    className="form-control"
                                    id="teacher-id"
                                />
                                {errors.id && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="teacher-name">Name</label>
                                <input
                                    {...register("teacherName", {
                                        required: true,
                                    })}
                                    type="text"
                                    className="form-control"
                                    id="teacher-name"
                                />
                                {errors.teacherName && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="teacher-email">Email</label>
                                <input
                                    {...register("email", {
                                        required: true,
                                    })}
                                    type="text"
                                    className="form-control"
                                    id="teacher-email"
                                />
                                {errors.email && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="teacher-pass">Password</label>
                                <input
                                    {...register("password", {
                                        required: true,
                                    })}
                                    type="text"
                                    className="form-control"
                                    id="teacher-pass"
                                />
                                {errors.password && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="teacher-phone">Phone</label>
                                <input
                                    {...register("phone", {
                                        required: true,
                                    })}
                                    type="tel"
                                    className="form-control"
                                    id="teacher-phone"
                                />
                                {errors.phone && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <p>Department</p>
                                <select
                                    className="form-control"
                                    {...register("department")}
                                >
                                    <option value="">Select Department</option>
                                    <option value="department-1">
                                        Department-01
                                    </option>
                                    <option value="department-2">
                                        Department-2
                                    </option>
                                    <option value="department-3">
                                        Department-3
                                    </option>
                                </select>
                            </div>
                            <p className="mb-0">Gender</p>
                            <div className="d-flex mb-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="male"
                                        value="male"
                                        {...register("male")}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="male"
                                    >
                                        Male
                                    </label>
                                </div>
                                <div className="form-check mx-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="female"
                                        value="female"
                                        {...register("female")}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="female"
                                    >
                                        Female
                                    </label>
                                </div>
                            </div>
                            <p>{error}</p>
                            <div className="form-group mb-3">
                                <input
                                    type="file"
                                    id="teacher-image"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="form-group">
                                {imageURL ? (
                                    <input
                                        type="submit"
                                        value="Register"
                                        className="form-control btn btn-primary brand-button"
                                    />
                                ) : (
                                    <p>
                                        You will be able to submit this form as
                                        soon as your image is ready to be
                                        uploaded.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTeacher;
