import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";

const CourseStudent = () => {
    const history = useHistory();
    return (
        <tr data-testid="tableRow">
            <td data-testid="tableData">John Doe</td>
            <td data-testid="tableData">3rd</td>
            <td data-testid="tableData">4.00</td>
            <td data-testid="tableData">13</td>
            <td data-testid="tableData">39</td>
            <td data-testid="tableData">
                <Button className="brand-button">Profile</Button>
            </td>
            <td data-testid="tableData">
                <Button
                    className="brand-button"
                    onClick={() => history.push("/all-assignments")}
                >
                    Assignments
                </Button>
            </td>
            <td data-testid="tableData">
                <Form.Select aria-label="Present" className="dropdown-select">
                    <option value="1">Present</option>
                    <option value="2">Absent</option>
                </Form.Select>
            </td>
        </tr>
    );
};

export default CourseStudent;
