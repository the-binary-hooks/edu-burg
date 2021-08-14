import Sidebar from "../../DashboardCommon/Sidebar/Sidebar";

const PaymentHistory = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 mt-5">
                    <h2 className="edu-burg-heading-1 text-center">
                        Here is your payment history
                    </h2>
                    <table className="table table-responsive table-hover text-center mt-5">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Transaction ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Basic JavaScript</td>
                                <td>$50</td>
                                <td>ASWERG344</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>React.Js</td>
                                <td>$70</td>
                                <td>WERvSG432GD</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Node.js</td>
                                <td>$60</td>
                                <td>OIKJJH34KJ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
