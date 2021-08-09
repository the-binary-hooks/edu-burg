import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Student from "./Student";

describe("renders <Student />", () => {
    it("renders container div in Student page", () => {
        const { getByTestId } = render(
            <Router>
                <Student student={FathersMobileNumber: 87542387893247,
FathersName: "Test Father",
MothersName: "Test Mother",
assignments: [],
chats: [],
comments: [],
courses: [],
dateOfBirth: "2021-08-02T05:53:22.386Z",
department: "6104ed9e5af2555f2cc8ccf8",
email: "test@gmail.com",
followers: [],
following: [],
gender: "male",
hscALevelAlimDiplomaInfo: {"board": "Dinajpur", "rollNo": "4353534", "registrationNo": "3143243", "passingYear": "2020", "GPA": "5.00"},
id: "1010"
payments: []
permanentAddress: "test address #34"
phone: 2841793
picture: "https://i.ibb.co/x3vtTDX/2020-12-17-4.png"
posts: []
presentAddress: "test address #34"
program: "Internship Program"
semester: "1st"
semesterResults: (5) [{…}, {…}, {…}, {…}, {…}]
session: "Spring"
sscOLevelDakhilInfo: {"board": "Dinajpur", "rollNo": "4353534", "registrationNo": "3143243", "passingYear": "2020", "GPA": "5.00"}
status: "inactive"
studentName: "Test"
__v: 0
_id: "610788590f0b412074fb2c84"}/>
            </Router>
        );
        const container = getByTestId("container");
        expect(container).toBeTruthy();
    });
});
