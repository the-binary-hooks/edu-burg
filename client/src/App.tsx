// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Authentication components
import Login from "./components/Authentication/Login/Login";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";

// Common Dashboard Components
import Home from "./components/Home/Home/Home";
import NewsFeed from "./components/DashboardCommon/NewsFeed/NewsFeed";
import Chatting from "./components/DashboardCommon/Chatting/Chatting";
import AllChats from "./components/DashboardCommon/AllChats/AllChats";
import Followers from "./components/DashboardCommon/Followers/Followers";

// Admin Dashboard Components
import AddCourse from "./components/Home/AddCourse/AddCourse";
import AddTeacher from "./components/Home/AddTeacher/AddTeacher";
import Admission from "./components/Home/Admission/Admission";
import MakeAdmin from "./components/Home/MakeAdmin/MakeAdmin";
import StudentReview from "./components/Home/StudentReview/StudentReview";

// Teacher Dashboard Components
import CoursesAssigned from "./components/TeacherDashboard/CoursesAssigned/CoursesAssigned";
import PublishResult from "./components/TeacherDashboard/PublishResult/PublishResult";
import TeacherProfile from "./components/TeacherDashboard/TeacherProfile/TeacherProfile";
import Course from "./components/TeacherDashboard/Course/Course";

// StyleSheet
import "./App.css";

const App = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/">
                    <Home />
                </PrivateRoute>
                {/* Authentication */}
                <Route path="/login">
                    <Login />
                </Route>
                {/* Dashboard Common */}
                <PrivateRoute path="/news-feed">
                    <NewsFeed />
                </PrivateRoute>
                <PrivateRoute path="/home">
                    <Home />
                </PrivateRoute>
                <PrivateRoute path="/chat/:id">
                    <Chatting />
                </PrivateRoute>
                <PrivateRoute path="/chats">
                    <AllChats />
                </PrivateRoute>
                <PrivateRoute path="/followers">
                    <Followers />
                </PrivateRoute>
                <PrivateRoute path="/course/:id">
                    <Course />
                </PrivateRoute>
                {/* Teacher Dashboard */}
                <PrivateRoute path="/courses">
                    <CoursesAssigned />
                </PrivateRoute>
                <PrivateRoute path="/publish-result">
                    <PublishResult />
                </PrivateRoute>
                <PrivateRoute path="/profile">
                    <TeacherProfile />
                </PrivateRoute>
                {/* Admin Dashboard */}
                <PrivateRoute path="/add-a-Course">
                    <AddCourse />
                </PrivateRoute>
                <Route path="/add-a-teacher">
                    <AddTeacher />
                </Route>
                <PrivateRoute path="/admission">
                    <Admission />
                </PrivateRoute>
                <PrivateRoute path="/make-admin">
                    <MakeAdmin />
                </PrivateRoute>
                <PrivateRoute path="/your-posts">
                    <NewsFeed />
                </PrivateRoute>
                <PrivateRoute path="/student-reviews">
                    <StudentReview />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default App;
