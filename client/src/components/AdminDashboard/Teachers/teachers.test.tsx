import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Teachers from "./Teachers";

describe("renders <Teachers />", () => {
    it("renders container div in Teachers page", () => {
        const { getByTestId } = render(
            <Router>
                <Teachers />
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });
});
