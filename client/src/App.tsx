// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home/Home/Home";

// Common Dashboard Components
import Sidebar from "./components/DashboardCommon/Sidebar/Sidebar";
import NewsFeed from "./components/DashboardCommon/NewsFeed/NewsFeed";

// Authentication components
import Login from "./components/Authentication/Login/Login";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";
import Register from "./components/Authentication/Register/Register";

// Teacher Dashboard Components
import CoursesCreated from "./components/TeacherDashboard/CoursesCreated/CoursesCreated";
import PublishResult from "./components/TeacherDashboard/PublishResult/PublishResult";
import TeacherProfile from "./components/TeacherDashboard/TeacherProfile/TeacherProfile";
import Course from "./components/TeacherDashboard/Course/Course";

// StyleSheet
import "./App.css";
import Chatting from "./components/DashboardCommon/Chatting/Chatting";

const App = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/dashboard">
                    <h1>Dashboard Home</h1>
                </PrivateRoute>
                {/* Authentication */}
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                {/* Dashboard Common */}
                <Route path="/newsFeed">
                    <NewsFeed />
                </Route>
                <Route path="/sidebar">
                    <Sidebar />
                </Route>
                {/* Teacher Dashboard */}
                <Route path="/coursesCreated">
                    <CoursesCreated />
                </Route>
                <Route path="/publishResult">
                    <PublishResult />
                </Route>
                <Route path="/teacherProfile">
                    <TeacherProfile />
                </Route>
                <Route path="/chatting">
                    <Chatting />
                </Route>
                <Route path="/course/:id">
                    <Course />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
