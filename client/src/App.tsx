// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/DashboardCommon/Sidebar/Sidebar";

// Authentication components
import Login from "./components/Authentication/Login/Login";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";
import Register from "./components/Authentication/Register/Register";
// Components
import NewsFeed from "./components/DashboardCommon/NewsFeed/NewsFeed";

import "./App.css";

const App = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/dashboard">
                    <h1>Dashboard Home</h1>
                </PrivateRoute>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/newsFeed">
                    <NewsFeed />
                </Route>
                <Route path="/">
                    <Sidebar />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
