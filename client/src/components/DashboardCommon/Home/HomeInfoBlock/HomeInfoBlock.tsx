import "./HomeInfoBlock.css";

// Props Interface --- typeScript
interface IProps {
    students?: number;
    teachers?: number;
    courses?: number;
}

const HomeInfoBlock = ({ students, teachers, courses }: IProps) => {
    return (
        <div
            className="home-info-block text-white text-center px-5 py-4 mt-4"
            style={{ minWidth: "292px" }}
        >
            <h3>{students ? "Students" : teachers ? "Teachers" : "Courses"}</h3>
            <h2>{students ? students : teachers ? teachers : courses}</h2>
        </div>
    );
};

export default HomeInfoBlock;
