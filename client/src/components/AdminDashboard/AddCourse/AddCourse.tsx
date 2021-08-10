import React, { useState } from "react";
import { useForm } from "react-hook-form";
// Components
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

// Add Course From Data Interface -- typescript
interface ICourseData  {
    courseTitle: string,
    courseCode: string,
    courseTeacher: string,
    courseStudents: string,
    department: string
}
const AddCourse = () => {
    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [error, setError] = useState(null);

    const onSubmit = (data: ICourseData) => {
        let students = data.courseStudents.split(",");
        let courseData = {
            courseTitle: data.courseTitle,
            courseCode: data.courseCode,
            courseTeacher: data.courseTeacher,
            courseStudents: students,
            department: data.department
        }

        console.log(courseData);
        fetch("http://localhost:5000/api/admin/addCourse", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success === true) {
                    alert("Course Created successfully!!");
                    window.location.reload();
                } else {
                    setError(result.message);
                }
            });
    };
    const addCourseBlockStyle = {
        maxWidth: "570px",
        margin: "auto",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "6px 4px 32px 6px rgb(0,0,0,0.25)",
        marginTop: "20px",
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10">
                    <div
                        className="add-course-block"
                        style={addCourseBlockStyle}
                    >
                        <h3>Add Course</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="course-title">
                                    Course Title
                                </label>
                                <input
                                    {...register("courseTitle", {
                                        required: true,
                                    })}
                                    type="text"
                                    className="form-control"
                                    id="course-title"
                                />
                                {errors.courseTitle && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="course-code">Course Code</label>
                                <input
                                    {...register("courseCode", {
                                        required: true,
                                    })}
                                    type="text"
                                    className="form-control"
                                    id="course-code"
                                />
                                {errors.courseCode && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="course-teacher">Course Teacher (Enter Teacher ID)</label>
                                <input
                                    {...register("courseTeacher", {
                                        required: true,
                                    })}
                                    type="number"
                                    className="form-control"
                                    id="course-teacher"
                                />
                                {errors.courseTeacher && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="course-teacher">Enter Student ID (Separate with comma )</label>
                                <input
                                    {...register("courseStudents", {
                                        required: true,
                                    })}
                                    type="text"
                                    className="form-control"
                                    id="course-students"
                                />
                                {errors.courseStudents && (
                                    <span>This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="select-dept">
                                    Select Department
                                </label>
                                <select
                                    {...register("department", {
                                        required: true,
                                    })}
                                    className="form-control"
                                    id="select-department"
                                >
                                    <option> Select</option>
                                    <option>Department 1</option>
                                    <option>Department 2</option>
                                    <option>Department 3</option>
                                    <option>Department 4</option>
                                    <option>Department 5</option>
                                </select>
                            </div>
                            <div className="form-group mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block w-100"
                                >
                                    Add Course
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;
