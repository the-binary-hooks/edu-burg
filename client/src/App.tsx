// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Authentication components
import Login from "./components/Authentication/Login/Login";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";

// Common Dashboard Components
import Home from "./components/DashboardCommon/Home/Home/Home";
import NewsFeed from "./components/DashboardCommon/NewsFeed/NewsFeed";
import Chatting from "./components/DashboardCommon/Chatting/Chatting";
import AllChats from "./components/DashboardCommon/AllChats/AllChats";
import Followers from "./components/DashboardCommon/Followers/Followers";

// Admin Dashboard Components
import AddCourse from "./components/AdminDashboard/AddCourse/AddCourse";
import AddTeacher from "./components/AdminDashboard/AddTeacher/AddTeacher";
import Admission from "./components/AdminDashboard/Admission/Admission";
import MakeAdmin from "./components/AdminDashboard/MakeAdmin/MakeAdmin";
import StudentReview from "./components/AdminDashboard/StudentReview/StudentReview";

// Teacher Dashboard Components
import CoursesAssigned from "./components/TeacherDashboard/CoursesAssigned/CoursesAssigned";
import PublishResult from "./components/TeacherDashboard/PublishResult/PublishResult";
import TeacherProfile from "./components/TeacherDashboard/Profile/TeacherProfile";
import Course from "./components/TeacherDashboard/Course/Course";

// StyleSheet
import "./App.css";
import Profile from "./components/TeacherDashboard/Profile/Profile";

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
                <PrivateRoute path={`/profile/:id`}>
                    <Profile />
                </PrivateRoute>
                {/* Admin Dashboard */}
                <PrivateRoute path="/add-a-Course">
                    <AddCourse />
                </PrivateRoute>
                <Route path="/add-a-teacher">
                    <AddTeacher />
                </Route>
                <Route path="/admission">
                    <Admission />
                </Route>
                <Route path="/make-admin">
                    <MakeAdmin />
                </Route>
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
