import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PublishResult from "./PublishResult";

describe("renders <PublishResult />", () => {
    it("renders <Container />", () => {
        const { getByTestId } = render(
            <Router>
                <PublishResult />
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });

    it("renders ParaGraph on no URL", () => {
        const { getByTestId } = render(
            <Router>
                <PublishResult />
            </Router>
        );
        const p = getByTestId("pOnNoURL");
        expect(p).toBeTruthy();
    });

    it("doesn't render publish button", () => {
        const { queryByText } = render(
            <Router>
                <PublishResult />
            </Router>
        );
        const publishButton = queryByText("Publish");
        expect(publishButton).toBeFalsy();
    });

    it("renders all form fields", () => {
        const { queryAllByPlaceholderText } = render(
            <Router>
                <PublishResult />
            </Router>
        );
        const formFields = queryAllByPlaceholderText(/.*/);
        expect(formFields).toHaveLength(4);
    });
});
