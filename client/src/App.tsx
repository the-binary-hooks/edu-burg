import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Register from "./components/Login/Register/Register";

function App() {
    return (
        <Router>
            <h1> ERP </h1>
            <Switch>
                <PrivateRoute path="/home">
                    <h1>Home</h1>
                </PrivateRoute>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
