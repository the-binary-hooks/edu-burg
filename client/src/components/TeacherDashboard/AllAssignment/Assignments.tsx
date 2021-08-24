import { Link } from "react-router-dom";

// Props interface -- typeScript
interface IProps {
    data: {
        id: number;
        code: number;
        link: string;
    };
}

const Assignments = ({ data }: IProps) => {
    const { id, code, link } = data;
    return (
        <>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                    <Link to="/single-assignment">@mdo</Link>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                    <Link to="/single-assignment">@fat</Link>
                </td>
            </tr>
        </>
    );
};

export default Assignments;
