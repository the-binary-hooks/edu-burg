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
import Course from "./components/TeacherDashboard/Course/Course";
import AllAssignment from "./components/TeacherDashboard/AllAssignment/AllAssignment";

// StyleSheet
import "./App.css";
import Profile from "./components/DashboardCommon/Profile/Profile/Profile";
import Teachers from "./components/AdminDashboard/Teachers/Teachers";
import Students from "./components/AdminDashboard/Students/Students";
import SemesterResults from "./components/StudentDashboard/SemesterResults/SemesterResults";

import SubmitAssignment from "./components/StudentDashboard/SubmitAssignment/SubmitAssignment";
import SingleAssignment from "./components/TeacherDashboard/SingleAssignmentPage/SingleAssignment";
import PaymentHistory from "./components/StudentDashboard/Payment-History/PaymentHistory";
import AddDepartment from "./components/AdminDashboard/AddDepartment/AddDepartment";

const App = () => {
    return (
        <Router data-testid="router">
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
                <PrivateRoute path={`/profile/:id`}>
                    <Profile />
                </PrivateRoute>
                {/* Teacher Dashboard */}
                <PrivateRoute path="/courses">
                    <CoursesAssigned />
                </PrivateRoute>
                <PrivateRoute path="/publish-result">
                    <PublishResult />
                </PrivateRoute>
                <PrivateRoute path="/all-assignments">
                    <AllAssignment />
                </PrivateRoute>
                <PrivateRoute path="/single-assignment">
                    <SingleAssignment />
                </PrivateRoute>
                {/* Admin Dashboard */}
                <PrivateRoute path="/add-a-Course">
                    <AddCourse />
                </PrivateRoute>
                <PrivateRoute path="/add-a-teacher">
                    <AddTeacher />
                </PrivateRoute>
                <PrivateRoute path="/add-departments">
                    <AddDepartment />
                </PrivateRoute>
                <Route path="/admission">
                    <Admission />
                </Route>
                <Route path="/make-admin">
                    <MakeAdmin />
                </Route>
                <Route path="/your-posts">
                    <NewsFeed />
                </Route>
                <PrivateRoute path="/student-reviews">
                    <StudentReview />
                </PrivateRoute>
                <PrivateRoute path="/teachers">
                    <Teachers />
                </PrivateRoute>
                <PrivateRoute path="/students">
                    <Students />
                </PrivateRoute>
                {/* Student Dashboard */}
                <PrivateRoute path="/semester-results">
                    <SemesterResults />
                </PrivateRoute>
                <PrivateRoute path="/submit-assignments">
                    <SubmitAssignment />
                </PrivateRoute>
                <PrivateRoute path="/payment-history">
                    <PaymentHistory />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default App;
