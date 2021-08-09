import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Admission from "./Admission";

describe("renders <Admission />", () => {
    it("renders container div in admission page", () => {
        const { getByTestId } = render(
            <Router>
                <Admission />
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });
});
