import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminProfile from "./UsersProfile/AdminProfile";
import TeacherProfile from "./UsersProfile/TeacherProfile";
import StudentProfile from "./UsersProfile/StudentProfile";

describe("renders three types of profiles", () => {
    it("renders <Container></Container> in <TeacherProfile />", () => {
        const { getByTestId } = render(
            <Router>
                <TeacherProfile />
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });

    it("renders <Container></Container> in <StudentProfile />", () => {
        const { getByTestId } = render(
            <Router>
                <StudentProfile />
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });

    it("renders <Container></Container> in <AdminProfile />", () => {
        const { getByTestId } = render(
            <Router>
                <AdminProfile />
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });
});
