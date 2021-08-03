import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminProfile from "./AdminProfile";
import StudentProfile from "./StudentProfile";
import TeacherProfile from "./TeacherProfile";

interface IUserPublicProfileRouteParams {
    id: string;
}

const Profile = () => {
    const { id } = useParams<IUserPublicProfileRouteParams>();
    console.log(id);

    const [role, setRole] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/auth/getById/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    console.log(data);
                    setRole(data.addInfo.role);
                }
            });
    }, [id]);

    console.log(role)

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
