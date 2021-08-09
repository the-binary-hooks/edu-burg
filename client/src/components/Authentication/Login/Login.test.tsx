import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("renders login page", () => {
    it("renders the whole login view", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(getByTestId("login-page")).toBeTruthy();
    });

    it("renders the login container", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(getByTestId("login-container")).toBeTruthy();
    });

    it("renders the font awesome icon", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(getByTestId("awesome-icon")).toBeTruthy();
    });

    it("renders the login form", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(getByTestId("login-form")).toBeTruthy();
    });

    it("renders the id input field", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(getByTestId("id-input")).toBeTruthy();
    });

    it("renders the password input", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(getByTestId("pass-input")).toBeTruthy();
    });

    it("renders the login button", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(getByTestId("login-button")).toBeTruthy();
    });
});
