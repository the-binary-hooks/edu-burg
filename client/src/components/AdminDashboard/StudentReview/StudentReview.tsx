import React from 'react';
import Sidebar from '../../DashboardCommon/Sidebar/Sidebar';

const StudentReview = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 pe-4">
                    <table style={{captionSide:'top'}} className="table table-striped table-hover table-responsive ms-2 mt-5 me-2 shadow m-auto px-3 py-4">
                        <caption className="text-center display-4">Student Review</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Review</th>
                                <th scope="col">Reviewed By</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Course - 01</td>
                                <td>This is a review text</td>
                                <td>John</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Course - 02</td>
                                <td>This is a review text</td>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Course - 03</td>
                                <td>This is a review text</td>
                                <td>Jacob</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Course - 04</td>
                                <td>This is a review text</td>
                                <td>Larry</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Course - 05</td>
                                <td>This is a review text</td>
                                <td>Doe</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentReview;