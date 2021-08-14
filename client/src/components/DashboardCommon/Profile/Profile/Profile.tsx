// React
import { useEffect, useState } from "react";
// React Router
import { useParams } from "react-router-dom";
// Components
import AdminProfile from "../UsersProfile/AdminProfile";
import StudentProfile from "../UsersProfile/StudentProfile";
import TeacherProfile from "../UsersProfile/TeacherProfile";

// User Public Profile Interface
interface IUserPublicProfileRouteParams {
    id: string;
}

const Profile = () => {
    // Param Var
    const { id } = useParams<IUserPublicProfileRouteParams>();

    // Initial State
    const [role, setRole] = useState(null);

    // Fetch logged in user from the DB
    useEffect(() => {
        fetch(`/api/auth/getById/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setRole(data.addInfo.role);
                }
            });
    }, [id]);

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
