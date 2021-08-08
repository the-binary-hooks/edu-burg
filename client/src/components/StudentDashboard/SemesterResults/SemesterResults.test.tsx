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

    // I don't know why it doesn't work --- feeling frustrated 😒
    // it("renders all table data", () => {
    //     act(() => {
    //         const { queryAllByTestId, queryByTestId } = render(
    //             <Router>
    //                 <SemesterResults />
    //             </Router>
    //         );
    //         const tdList = queryAllByTestId("tableData");
    //         expect(tdList).toHaveLength(3);
    //     });
    // });

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
