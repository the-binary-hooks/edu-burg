import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../../Sidebar/Sidebar";
import Chart from "../Chart/Chart";
import HomeInfoBlock from "../HomeInfoBlock/HomeInfoBlock";
import "./Home.css";

const Home = () => {
    const [teachers, setTeachers] = useState(0);
    const [students, setStudents] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/api/teacher/getAll")
            .then((res) => res.json())
            .then((data) => setTeachers(parseInt(data.length)));
    }, []);

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
                        <HomeInfoBlock students={students}/>
                        <HomeInfoBlock courses={6}/>
                    </div>
                    <Chart />
                </div>
            </div>
        </Container>
    );
};

export default Home;
