// React
import { useState, useEffect } from "react";

// React Bootstrap
import { Container } from "react-bootstrap";

// Components
import Sidebar from "../../Sidebar/Sidebar";
import Chart from "../Chart/Chart";
import HomeInfoBlock from "../HomeInfoBlock/HomeInfoBlock";

// CSS
import "./Home.css";

const Home = () => {
    // Initial States
    const [teachers, setTeachers] = useState(0);
    const [students, setStudents] = useState(0);

    // Fetch Teachers
    useEffect(() => {
        fetch("http://localhost:5000/api/teacher/getAll")
            .then((res) => res.json())
            .then((data) => setTeachers(parseInt(data.length)));
    }, []);

    // Fetch Students
    useEffect(() => {
        fetch("http://localhost:5000/api/student/getAll")
            .then((res) => res.json())
            .then((data) => setStudents(parseInt(data.length)));
    }, []);

    return (
        <Container fluid>
            <div className="row">
                <Sidebar />
                <div className="col-md-10">
                    <h2 className="home-heading text-center">Total</h2>
                    <div className="info-block-container d-flex justify-content-around flex-wrap">
                        <HomeInfoBlock teachers={teachers} />
                        <HomeInfoBlock students={students} />
                        <HomeInfoBlock courses={6} />
                    </div>
                    <Chart />
                </div>
            </div>
        </Container>
    );
};

export default Home;
