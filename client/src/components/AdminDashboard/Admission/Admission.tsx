import { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";
import axios from "axios";

// Data on Form submit interface --- typeScript
interface IFormData {
    id: String;
    dob: String;
    FatherMobile: String;
    FatherName: String;
    female: String | null;
    hscBoard: String;
    hscGpa: String;
    hscReg: String;
    hscRoll: String;
    hscYear: String;
    male: String | null;
    MotherName: String;
    permanentDistrict: String;
    permanentHouse: String;
    permanentZipCode: String;
    presentDistrict: String;
    presentHouse: String;
    presentZipCode: String;
    program: String;
    spring: String | null;
    sscBoard: String;
    sscGpa: String;
    sscReg: String;
    sscRoll: String;
    sscYear: String;
    studentContact: String;
    studentEmail: String;
    studentName: String;
    summer: String | null;
    winter: String | null;
    password: String;
}

const Admission = () => {
    // Styles
    const formSubHeadingStyle = {
        fontFamily: "Roboto",
        fontSize: "36px",
    };
    const formLabelStyle = {
        fontFamily: "Roboto",
        fontSize: "24px",
    };

    // React Router Form Vars
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Initial States
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);

    // handles ImgBB image upload
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

    // Handle Form submit
    const onSubmit = (data: IFormData) => {
        console.log(data);
        const {
            id,
            dob,
            FatherMobile,
            FatherName,
            password,
            hscBoard,
            hscGpa,
            hscReg,
            hscRoll,
            hscYear,
            male,
            MotherName,
            permanentDistrict,
            permanentHouse,
            permanentZipCode,
            presentDistrict,
            presentHouse,
            presentZipCode,
            program,
            sscBoard,
            sscGpa,
            sscReg,
            sscRoll,
            sscYear,
            studentContact,
            studentEmail,
            studentName,
            summer,
            winter,
        } = data;

        const student = {
            id,
            dateOfBirth: dob,
            FathersMobileNumber: FatherMobile,
            FathersName: FatherName,
            password,
            gender: male ? "male" : "female",
            hscALevelAlimDiplomaInfo: {
                board: hscBoard,
                rollNo: hscRoll,
                registrationNo: hscReg,
                passingYear: hscYear,
                GPA: hscGpa,
            },
            MothersName: MotherName,
            permanentAddress: {
                permanentDistrict,
                permanentHouse,
                permanentZipCode,
            },
            presentAddress: {
                presentDistrict,
                presentHouse,
                presentZipCode,
            },
            program,
            session: summer ? "summer" : winter ? "winter" : "spring",
            sscOLevelDakhilInfo: {
                board: sscBoard,
                rollNo: sscRoll,
                registrationNo: sscReg,
                passingYear: sscYear,
                GPA: sscGpa,
            },
            phone: studentContact,
            email: studentEmail,
            studentName,
            picture: imageURL,
        };

        // Add Student to DB
        fetch("http://localhost:5000/api/student/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(student),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    console.log(result);
                    alert("Your student has been registered successfully!!");
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
                    style={{ maxWidth: "991px" }}
                >
                    <h2 className="text-center pt-4 edu-buge-heading-1">
                        Student Admission Form
                    </h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Course Info  */}
                            <div className="d-flex justify-content-around flex-wrap">
                                <div
                                    style={{ minWidth: "210px" }}
                                    className="m-3"
                                >
                                    <p>Select Session</p>
                                    <input
                                        type="radio"
                                        id="summer"
                                        className="px-2"
                                        {...register("summer")}
                                    />
                                    <label htmlFor="summer" className="px-2">
                                        Summer
                                    </label>
                                    <br />
                                    <input
                                        type="radio"
                                        id="winter"
                                        {...register("winter")}
                                    />
                                    <label htmlFor="winter" className="px-2">
                                        Winter
                                    </label>
                                    <br />
                                    <input
                                        type="radio"
                                        {...register("spring")}
                                        id="spring"
                                    />
                                    <label htmlFor="spring" className="px-2">
                                        Spring
                                    </label>
                                </div>
                                <div
                                    style={{ minWidth: "210px" }}
                                    className="m-3"
                                >
                                    <p>Select Program</p>
                                    <select {...register("program")}>
                                        <option value="program1">
                                            Program - 01
                                        </option>
                                        <option value="program2">
                                            Program - 02
                                        </option>
                                        <option value="program3">
                                            Program - 03
                                        </option>
                                    </select>
                                </div>
                                <div
                                    style={{ minWidth: "210px" }}
                                    className="m-3"
                                >
                                    <p>Student ID</p>
                                    <input
                                        type="number"
                                        id="student-id"
                                        placeholder="Give Your ID here"
                                        {...register("id", {
                                            required: true,
                                        })}
                                    />
                                </div>
                            </div>

                            {/* Personal Information  */}

                            <div
                                className="personal-information mx-auto mt-5"
                                style={{ width: "85%" }}
                            >
                                <h3 style={formSubHeadingStyle}>
                                    Personal Information
                                </h3>
                                <div className="form-group mb-3">
                                    <label
                                        htmlFor="student-name"
                                        style={formLabelStyle}
                                    >
                                        Student's Name
                                    </label>
                                    <input
                                        {...register("studentName", {
                                            required: true,
                                        })}
                                        type="text"
                                        className="form-control"
                                        id="student-name"
                                        placeholder="Student's Name"
                                    />
                                    {errors.studentName && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label
                                        htmlFor="father-name"
                                        style={formLabelStyle}
                                    >
                                        Father's Name
                                    </label>
                                    <input
                                        {...register("FatherName", {
                                            required: true,
                                        })}
                                        type="text"
                                        className="form-control"
                                        id="father-name"
                                        placeholder="Father's Name"
                                    />
                                    {errors.FatherName && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label
                                        htmlFor="mother-name"
                                        style={formLabelStyle}
                                    >
                                        Mother's Name
                                    </label>
                                    <input
                                        {...register("MotherName", {
                                            required: true,
                                        })}
                                        type="text"
                                        className="form-control"
                                        id="mother-name"
                                        placeholder="Mother's Name"
                                    />
                                    {errors.MotherName && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label
                                        htmlFor="student-contact"
                                        style={formLabelStyle}
                                    >
                                        Student's Contact
                                    </label>
                                    <input
                                        {...register("studentContact", {
                                            required: true,
                                        })}
                                        type="text"
                                        className="form-control"
                                        id="student-contact"
                                        placeholder="Student Contact"
                                    />
                                    {errors.studentContact && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label
                                        htmlFor="student-email"
                                        style={formLabelStyle}
                                    >
                                        Student Email
                                    </label>
                                    <input
                                        {...register("studentEmail", {
                                            required: true,
                                        })}
                                        type="email"
                                        className="form-control"
                                        id="student-email"
                                        placeholder="Student Email"
                                    />
                                    {errors.studentEmail && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="teacher-pass">
                                        Password
                                    </label>
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
                                    <label
                                        htmlFor="student-email"
                                        style={formLabelStyle}
                                    >
                                        Father's Mobile Number
                                    </label>
                                    <input
                                        {...register("FatherMobile", {
                                            required: true,
                                        })}
                                        type="tel"
                                        className="form-control"
                                        id="father-mobile"
                                        placeholder="Father's Mobile Number"
                                    />
                                    {errors.FatherMobile && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="dob" style={formLabelStyle}>
                                        Date of Birth
                                    </label>
                                    <input
                                        {...register("dob", { required: true })}
                                        type="date"
                                        className="form-control"
                                        id="dob"
                                        placeholder="Date of Birth"
                                    />
                                    {errors.dob && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div className="d-flex">
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
                                <div className="mt-2">
                                    <p>Permanent Address</p>
                                    <div className="d-flex pt-1 flex-wrap">
                                        <div className="form-group my-2">
                                            <input
                                                {...register("permanentHouse", {
                                                    required: true,
                                                })}
                                                type="text"
                                                className="form-control"
                                                id="permanent-house"
                                                placeholder="House/Village"
                                            />
                                            {errors.permanentHouse && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group my-2">
                                            <input
                                                {...register(
                                                    "permanentDistrict",
                                                    { required: true }
                                                )}
                                                type="text"
                                                className="form-control"
                                                id="permanent-district"
                                                placeholder="District"
                                            />
                                            {errors.permanentDistrict && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group my-2">
                                            <input
                                                {...register(
                                                    "permanentZipCode",
                                                    { required: true }
                                                )}
                                                type="number"
                                                className="form-control"
                                                id="permanent-zip-code"
                                                placeholder="ZIP code"
                                            />
                                            {errors.permanentZipCode && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p>Present Address</p>
                                    <div className="d-flex pt-1 flex-wrap">
                                        <div className="form-group my-2">
                                            <input
                                                {...register("presentHouse", {
                                                    required: true,
                                                })}
                                                type="text"
                                                className="form-control"
                                                id="present-house"
                                                placeholder="House/Village"
                                            />
                                            {errors.presentHouse && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group my-2">
                                            <input
                                                {...register(
                                                    "presentDistrict",
                                                    { required: true }
                                                )}
                                                type="text"
                                                className="form-control"
                                                id="present-district"
                                                placeholder="District"
                                            />
                                            {errors.presentDistrict && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group my-2">
                                            <input
                                                {...register("presentZipCode", {
                                                    required: true,
                                                })}
                                                type="number"
                                                className="form-control"
                                                id="present-zip-code"
                                                placeholder="ZIP code"
                                            />
                                            {errors.presentZipCode && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p>SSC/O-Level/Dakhil Information</p>
                                    <div className="d-flex pt-1 flex-wrap">
                                        <div className="form-group me-1 mb-3">
                                            <input
                                                {...register("sscBoard", {
                                                    required: true,
                                                })}
                                                type="text"
                                                className="form-control"
                                                id="ssc-board"
                                                placeholder="Board"
                                            />
                                            {errors.sscBoard && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input
                                                {...register("sscRoll", {
                                                    required: true,
                                                })}
                                                type="number"
                                                className="form-control"
                                                id="ssc-roll"
                                                placeholder="Roll No."
                                            />
                                            {errors.sscRoll && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input
                                                {...register("sscReg", {
                                                    required: true,
                                                })}
                                                type="number"
                                                className="form-control"
                                                id="ssc-reg"
                                                placeholder="Registration No."
                                            />
                                            {errors.sscReg && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input
                                                {...register("sscYear", {
                                                    required: true,
                                                })}
                                                type="number"
                                                className="form-control"
                                                id="ssc-pass-year"
                                                placeholder="Passing Year"
                                            />
                                            {errors.sscYear && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input
                                                {...register("sscGpa", {
                                                    required: true,
                                                })}
                                                type="number"
                                                className="form-control"
                                                id="ssc-gpa"
                                                placeholder="GPA"
                                            />
                                            {errors.sscGpa && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <p>HSC/A-Level/Alim/Diploma Information</p>
                                    <div className="d-flex pt-1 flex-wrap">
                                        <div className="form-group me-1 mb-3">
                                            <input
                                                {...register("hscBoard", {
                                                    required: true,
                                                })}
                                                type="text"
                                                className="form-control"
                                                id="hsc-board"
                                                placeholder="Board"
                                            />
                                            {errors.hscBoard && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input
                                                {...register("hscRoll", {
                                                    required: true,
                                                })}
                                                type="number"
                                                className="form-control"
                                                id="hsc-roll"
                                                placeholder="Roll No."
                                            />
                                            {errors.hscRoll && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input
                                                {...register("hscReg", {
                                                    required: true,
                                                })}
                                                type="number"
                                                className="form-control"
                                                id="hsc-reg"
                                                placeholder="Registration No."
                                            />
                                            {errors.hscReg && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input
                                                {...register("hscYear", {
                                                    required: true,
                                                })}
                                                type="number"
                                                className="form-control"
                                                id="hsc-pass-year"
                                                placeholder="Passing Year"
                                            />
                                            {errors.hscYear && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group me-1 mb-3">
                                            <input
                                                {...register("hscGpa", {
                                                    required: true,
                                                })}
                                                type="number"
                                                className="form-control"
                                                id="hsc-gpa"
                                                placeholder="GPA"
                                            />
                                            {errors.hscGpa && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>Choose Image</p>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        onChange={handleImageUpload}
                                        className="edu-burg-file-input"
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
                                            You will be able to submit this form
                                            as soon as your image is ready to be
                                            uploaded.
                                        </p>
                                    )}
                                    <p>{error}</p>
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
