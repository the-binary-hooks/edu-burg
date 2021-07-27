import { Button, Form } from "react-bootstrap";

const CourseStudent = () => {
    return (
        <tr>
            <td>John Doe</td>
            <td>3rd</td>
            <td>4.00</td>
            <td>13</td>
            <td>39</td>
            <td>
                <Button className="brand-button">Profile</Button>
            </td>
            <td>
                <Button className="brand-button">Assignments</Button>
            </td>
            <td>
                <Form.Select aria-label="Present">
                    <option value="1">Present</option>
                    <option value="2">Absent</option>
                </Form.Select>
            </td>
        </tr>
    );
};

export default CourseStudent;
