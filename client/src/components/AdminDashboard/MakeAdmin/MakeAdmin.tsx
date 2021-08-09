import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

// Data on Form submit
interface IFormData {
    adminEmail: String;
    adminName: String;
    id: String;
    female: String | null;
    male: String | null;
    password: String;
    adminPhone: String;
}

const MakeAdmin = () => {
    // Initial States
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

    // React Router Form Vars
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle Form Submit
    const onSubmit = (data: IFormData) => {
        const { adminEmail, adminName, id, male, password, adminPhone } = data;

        const admin = {
            email: adminEmail,
            adminName,
            id,
            gender: male ? "male" : "female",
            password,
            phone: adminPhone,
            picture: imageURL,
        };

        // Add admin to DB
        fetch("http://localhost:5000/api/admin/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(admin),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success === true) {
                    alert("Your admin has been registered successfully!!");
                    window.location.reload();
                }
            });
    };

    return (
        <div className="container-fluid" data-testid="container">
            <div className="row">
                <Sidebar />
                <div
                    className="col-md-10 mt-5 shadow m-auto px-3 py-4"
                    style={{ maxWidth: "900px" }}
                >
                    <h2 className="text-center pt-4">Make An Admin</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-3">
                                <label htmlFor="admin-id">ID</label>
                                <input
                                    {...register("id", {
                                        required: true,
                                    })}
                                    type="number"
                                    className="form-control"
                                    id="admin-id"
                                />
                                {errors.id && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="admin-name">Name</label>
                                <input
                                    {...register("adminName", {
                                        required: true,
                                    })}
                                    type="text"
                                    className="form-control"
                                    id="admin-name"
                                />
                                {errors.adminName && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="admin-email">Email</label>
                                <input
                                    {...register("adminEmail", {
                                        required: true,
                                    })}
                                    type="text"
                                    className="form-control"
                                    id="admin-email"
                                />
                                {errors.adminEmail && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="admin-pass">Password</label>
                                <input
                                    {...register("password", {
                                        required: true,
                                    })}
                                    type="text"
                                    className="form-control"
                                    id="admin-pass"
                                />
                                {errors.password && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="admin-phone">Phone</label>
                                <input
                                    {...register("adminPhone", {
                                        required: true,
                                    })}
                                    type="tel"
                                    className="form-control"
                                    id="admin-phone"
                                />
                                {errors.adminPhone && (
                                    <span>This field is required</span>
                                )}
                            </div>
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
                            <div className="form-group mb-3">
                                <input
                                    type="file"
                                    name="admin-image"
                                    id="admin-image"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <p>{error}</p>
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

export default MakeAdmin;
