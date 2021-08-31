import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

interface IdepartmentData {
  departmentTitle: string;
  departmentHead: string;
  departmentTeacher: string;
}

const AddDepartment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = (data: IdepartmentData) => {
    let departmentData = {
      departmentTitle: data.departmentTitle,
      departmentHead: data.departmentHead,
      departmentTeacher: data.departmentTeacher,
    };

    console.log(departmentData);

    fetch("http://localhost:5000/api/admin/addDepartment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success === true) {
          alert("Department Added successfully!!");
          window.location.reload();
        } else {
          setError(result.message);
          alert(error)
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
          <div className="add-course-block" style={addCourseBlockStyle}>
            <h3>Add Department</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="course-title">Department Title</label>
                <input
                  {...register("departmentTitle", {
                    required: true,
                  })}
                  type="text"
                  className="form-control"
                  id="course-title"
                />
                {errors.departmentTitle && <span>This field is required</span>}
              </div>
              <div className="form-group">
                <label htmlFor="course-teacher">
                  Department Head (Enter Teacher ID)
                </label>
                <input
                  {...register("departmentHead", {
                    required: true,
                  })}
                  type="number"
                  className="form-control"
                  id="course-teacher"
                />
                {errors.departmentHead && <span>This field is required</span>}
              </div>
              <div className="form-group">
                <label htmlFor="course-teacher">
                  Enter Teacher ID (Separate with comma )
                </label>
                <input
                  {...register("departmentTeacher", {
                    required: true,
                  })}
                  type="text"
                  className="form-control"
                  id="course-students"
                />
                {errors.departmentTeacher && (
                  <span>This field is required</span>
                )}
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn brand-button d-block w-100">
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

export default AddDepartment;
