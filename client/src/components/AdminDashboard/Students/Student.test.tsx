import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Students from "./Students";

describe("renders <Students />", () => {
    it("renders container div in Students page", () => {
        const { getByTestId } = render(
            <Router>
                <Students />
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });
});
