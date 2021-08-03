import AdminProfile from "./AdminProfile";
import StudentProfile from "./StudentProfile";
import TeacherProfile from "./TeacherProfile";

const Profile = () => {
    const role = localStorage.getItem("role");
    return (
        <>
            {role === "student" ? (
                <StudentProfile />
            ) : role === "teacher" ? (
                <TeacherProfile />
            ) : (
                <AdminProfile />
            )}
        </>
    );
};

export default Profile;
