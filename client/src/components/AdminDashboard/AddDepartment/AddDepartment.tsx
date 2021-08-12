import React from 'react';
import Sidebar from '../../DashboardCommon/Sidebar/Sidebar';
import WorkInProgress from './workInProgress.gif'

const AddDepartment = () => {
    return (
        <div>
            <div className="row">
                <Sidebar/>
                <div className="col-md-10">
                    <div className="work-in-progress text-center mt-5">
                        <h3>Work In Progress</h3>
                        <img src={WorkInProgress} alt="Work in progress animation" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDepartment;