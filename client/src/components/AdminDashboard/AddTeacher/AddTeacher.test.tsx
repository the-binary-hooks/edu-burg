import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AddTeacher from "./AddTeacher";

describe("renders <AddTeacher />", () => {
    it("renders container div in addTeacher page", () => {
        const { getByTestId } = render(
            <Router>
                <AddTeacher />
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });
});
