import React from 'react';
import Sidebar from '../../DashboardCommon/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';

const SubmitAssignment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 m-auto shadow" style={{maxWidth:'700px'}}>
                    <h2 className="edu-burg-heading-1 text-center mb-5 mt-5" style={{fontSize:'45px'}}> Submit Your Assignment Link Here </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <label htmlFor="course-code" className="edu-burg-input-label">Enter Course Code</label>
                            <input {...register("courseCode", { required: true })} type="text" className="form-control" id="course-code" placeholder="Enter Course Code" />
                            {errors.courseCode && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="assignment-link" className="edu-burg-input-label">Put Your Links Here</label>
                            <input {...register("assignmentLink", { required: true })} type="text" className="form-control" id="assignment-link" style={{minHeight:'150px'}} placeholder="Enter your links here" />
                            {errors.assignmentLink && <span className="text-danger">This field is required</span>}
                        </div>
                        <button type="submit" className="btn brand-button text-white">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubmitAssignment;