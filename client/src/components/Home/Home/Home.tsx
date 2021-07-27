import React from 'react';
import Sidebar from '../../DashboardCommon/Sidebar/Sidebar';
import HomeInfoBlock from '../HomeInfoBlock/HomeInfoBlock';
import './Home.css'

const Home = () => {

    return (
        <div className="container-fluid">
            <div className="row">
            <Sidebar />
            <div className="col-md-10">
                <h2 className="home-heading text-center">Total</h2>
                <div className="info-block-container d-flex justify-content-around">
                <HomeInfoBlock />
                <HomeInfoBlock />
                <HomeInfoBlock />
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Home;