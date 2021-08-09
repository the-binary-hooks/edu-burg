import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MakeAdmin from "./MakeAdmin";

describe("renders <MakeAdmin />", () => {
    it("renders container div in MakeAdmin page", () => {
        const { getByTestId } = render(
            <Router>
                <MakeAdmin />
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });
});
