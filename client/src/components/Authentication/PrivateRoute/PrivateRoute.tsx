import { Redirect, Route } from "react-router-dom";
// Children prop type -- typeScript
import { ReactNode } from "react";

// Props interface -- typescript
interface IProps {
    children?: ReactNode;
    path: string;
    exact?: boolean;
}

const PrivateRoute = ({ children, ...rest }: IProps) => {
    // JWT Token
    const token = localStorage.getItem("authToken");
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
