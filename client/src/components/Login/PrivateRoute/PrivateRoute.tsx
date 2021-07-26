import { Redirect, Route } from "react-router-dom";
import { ReactNode } from "react-router/node_modules/@types/react";

interface IProps {
    children?: ReactNode;
    path: string;
}

const PrivateRoute = ({ children, ...rest }: IProps) => {
    const token = localStorage.getItem("authToken");
    // Auth.isAuthenticated();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
