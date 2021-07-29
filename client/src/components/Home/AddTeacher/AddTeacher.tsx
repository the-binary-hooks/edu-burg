import { useForm } from "react-hook-form";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

// Form data Interface --- typescript
interface IFormData {}

const AddTeacher = () => {
    // const teacher = {
    //     teacherName,
    //     email,
    //     password,
    //     phone,
    //     id,
    //     teacherName,
    //     email,
    //     password,
    //     phone,
    //     bio,
    //     department,
    //     gender,
    //     picture,
    //     courses,
    //     followers,
    //     following,
    //     posts,
    //     chats,
    // } = req.body;
    // const teacher = await Teacher.create(req.body);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => console.log(data);
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
                                    {...register("teacherId", {
                                        required: true,
                                    })}
                                    type="number"
                                    className="form-control"
                                    id="teacher-id"
                                />
                                {errors.teacherId && (
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
                                    {...register("teacherEmail", {
                                        required: true,
                                    })}
                                    type="text"
                                    className="form-control"
                                    id="teacher-email"
                                />
                                {errors.teacherEmail && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="teacher-phone">Phone</label>
                                <input
                                    {...register("teacherPhone", {
                                        required: true,
                                    })}
                                    type="tel"
                                    className="form-control"
                                    id="teacher-phone"
                                />
                                {errors.teacherPhone && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <p>Department</p>
                                <select
                                    {...register("department")}
                                    className="form-control"
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
                                        name="gender"
                                        id="male"
                                        value="male"
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
                                        name="gender"
                                        id="female"
                                        value="female"
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
                                    name="teacher-image"
                                    id="teacher-image"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Register"
                                    className="form-control btn btn-primary"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTeacher;
