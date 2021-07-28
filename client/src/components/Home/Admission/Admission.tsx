import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../DashboardCommon/Sidebar/Sidebar';
const Admission = () => {
    const admissionHeadingStyle = {
        fontFamily: 'Roboto',
        fontSize: '64px',
    }
    const formSubHeadingStyle = {
        fontFamily: 'Roboto',
        fontSize: '36px',
    }
    const formLabelStyle = {
        fontFamily: 'Roboto',
        fontSize: '24px',
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 mt-5 shadow m-auto px-3 py-4" style={{ maxWidth: '991px' }}>
                    <h2 style={admissionHeadingStyle} className="text-center pt-4">Student Admission Form</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Course Info  */}
                            <div className="d-flex justify-content-around">
                                <div>
                                    <p>Select Session</p>
                                    <input type="radio" name="session" id="summer" className="px-2" />
                                    <label htmlFor="summer" className="px-2"> Summer</label> <br />
                                    <input type="radio" name="session" id="winter" />
                                    <label htmlFor="summer" className="px-2"> Winter</label><br />
                                    <input type="radio" name="session" id="spring" />
                                    <label htmlFor="summer" className="px-2"> Spring</label>
                                </div>
                                <div>
                                    <p>Select Program</p>
                                    <select {...register("program")}>
                                        <option value="program1">Program - 01</option>
                                        <option value="program2">Program - 02</option>
                                        <option value="program3">Program - 03</option>
                                    </select>
                                </div>
                                <div>
                                    <p>Student ID</p>
                                    <input type="number" name="studentId" id="student-id" placeholder="Give Yorr ID here" />
                                </div>
                            </div>

                            {/* Personal Information  */}

                            <div className="personal-information mx-auto mt-5" style={{ width: '85%' }}>
                                <h3 style={formSubHeadingStyle}>Personal Information</h3>
                                <div className="form-group mb-3">
                                    <label htmlFor="student-name" style={formLabelStyle}>Student's Name</label>
                                    <input  {...register("studentName", { required: true })} type="text" className="form-control" id="student-name" placeholder="Student's Name" />
                                    {errors.studentName && <span>This field is required</span>}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="father-name" style={formLabelStyle}>Father's Name</label>
                                    <input  {...register("fatherName", { required: true })} type="text" className="form-control" id="father-name" placeholder="Father's Name" />
                                    {errors.fatherName && <span>This field is required</span>}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="mother-name" style={formLabelStyle}>Mother's Name</label>
                                    <input  {...register("motherName", { required: true })} type="text" className="form-control" id="mother-name" placeholder="Mother's Name" />
                                    {errors.motherName && <span>This field is required</span>}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="student-contact" style={formLabelStyle}>Student's Contact</label>
                                    <input  {...register("studentContact", { required: true })} type="text" className="form-control" id="student-contact" placeholder="Student Contact" />
                                    {errors.studentContact && <span>This field is required</span>}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="student-email" style={formLabelStyle}>Student Email</label>
                                    <input  {...register("studentEmail", { required: true })} type="email" className="form-control" id="student-email" placeholder="Student Email" />
                                    {errors.studentEmail && <span>This field is required</span>}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="student-email" style={formLabelStyle}>Father's Mobile Number</label>
                                    <input  {...register("fatherMobile", { required: true })} type="tel" className="form-control" id="father-mobile" placeholder="Father's Mobile Number" />
                                    {errors.fatherMobile && <span>This field is required</span>}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="dob" style={formLabelStyle}>Date of Birth</label>
                                    <input  {...register("dob", { required: true })} type="date" className="form-control" id="dob" placeholder="Date of Birth" />
                                    {errors.dob && <span>This field is required</span>}
                                </div>
                                <div className="d-flex">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
                                        <label className="form-check-label" htmlFor="male">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                                        <label className="form-check-label" htmlFor="female">
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p>Permanent Address</p>
                                    <div className="d-flex justify-content-around pt-1">
                                        <div className="form-group">
                                            <input {...register("permanentHouse", { required: true })} type="text" className="form-control" id="permanent-house" placeholder="House/Village" />
                                            {errors.permanentHouse && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input {...register("permanentDistrict", { required: true })} type="text" className="form-control" id="permanent-district" placeholder="District" />
                                            {errors.permanentDistrict && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input {...register("permanentZipCode", { required: true })} type="number" className="form-control" id="permanent-zip-code" placeholder="ZIP code" />
                                            {errors.permanentZipCode && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p>Present Address</p>
                                    <div className="d-flex justify-content-around pt-1">
                                        <div className="form-group">
                                            <input {...register("presentHouse", { required: true })} type="text" className="form-control" id="present-house" placeholder="House/Village" />
                                            {errors.presentHouse && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input {...register("presentDistrict", { required: true })} type="text" className="form-control" id="present-district" placeholder="District" />
                                            {errors.presentDistrict && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input {...register("presentZipCode", { required: true })} type="number" className="form-control" id="present-zip-code" placeholder="ZIP code" />
                                            {errors.presentZipCode && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p>SSC/O-Level/Dakhil Information</p>
                                    <div className="d-flex pt-1 flex-wrap">
                                        <div className="form-group me-1 mb-3">
                                            <input {...register("sscBoard", { required: true })} type="text" className="form-control" id="ssc-board" placeholder="Board" />
                                            {errors.sscBoard && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input {...register("sscRoll", { required: true })} type="number" className="form-control" id="ssc-roll" placeholder="Roll No." />
                                            {errors.sscRoll && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input {...register("sscReg", { required: true })} type="number" className="form-control" id="ssc-reg" placeholder="Registration No." />
                                            {errors.sscReg && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input {...register("sscYear", { required: true })} type="number" className="form-control" id="ssc-pass-year" placeholder="Passing Year" />
                                            {errors.sscYear && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input {...register("sscGpa", { required: true })} type="number" className="form-control" id="ssc-gpa" placeholder="GPA" />
                                            {errors.sscGpa && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <p>HSC/A-Level/Alim/Diploma Information</p>
                                    <div className="d-flex pt-1 flex-wrap">
                                        <div className="form-group me-1 mb-3">
                                            <input {...register("hscBoard", { required: true })} type="text" className="form-control" id="hsc-board" placeholder="Board" />
                                            {errors.hscBoard && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input {...register("hscRoll", { required: true })} type="number" className="form-control" id="hsc-roll" placeholder="Roll No." />
                                            {errors.hscRoll && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input {...register("hscReg", { required: true })} type="number" className="form-control" id="hsc-reg" placeholder="Registration No." />
                                            {errors.hscReg && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input {...register("hscYear", { required: true })} type="number" className="form-control" id="hsc-pass-year" placeholder="Passing Year" />
                                            {errors.hscYear && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input {...register("hscGpa", { required: true })} type="number" className="form-control" id="hssc-gpa" placeholder="GPA" />
                                            {errors.hscGpa && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input {...register("image", { required: true })} type="file" name="image" id="image" />
                                    {errors.image && <span>This field is required</span>}
                                </div>
                                <div className="input-group mt-5">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block d-block w-100">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Admission;