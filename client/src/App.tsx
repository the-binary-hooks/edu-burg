// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Home/Sidebar/Sidebar";

// Authentication components
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Register from "./components/Login/Register/Register";

function App() {
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
                <Route path="/">
                    <Sidebar/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
