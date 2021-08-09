import { render, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SemesterResults from "./SemesterResults";

describe("renders <SemesterResults />", () => {
    it("renders <Container />", () => {
        const { getByTestId } = render(
            <Router>
                <SemesterResults />
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });

    it("renders the heading", () => {
        const { queryByTestId } = render(
            <Router>
                <SemesterResults />
            </Router>
        );
        const heading = queryByTestId("heading");
        expect(heading).toBeTruthy();
    });
});
