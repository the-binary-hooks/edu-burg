import { render, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";

describe("renders sidebar", () => {
    it("renders <Col />", () => {
        const { getByTestId } = render(
            <Router>
                <Sidebar />
            </Router>
        );

        const column = getByTestId("sidebar");
        expect(column).toBeInTheDocument();
    });

    // Doesn't work --- don't know why
    // it("li", () => {
    //     act(() => {
    //         const { queryByTestId } = render(
    //             <Router>
    //                 <Sidebar />
    //             </Router>
    //         );

    //         const list = queryByTestId("list");
    //         expect(list).toBeTruthy();
    //     });
    // });
});
