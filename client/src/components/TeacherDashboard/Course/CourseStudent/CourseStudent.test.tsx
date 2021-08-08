import { render } from "@testing-library/react";
import CourseStudent from "./CourseStudent";

describe("renders <CourseStudent/>", () => {
    it("renders <tr />", () => {
        const { getByTestId } = render(<CourseStudent />);
        const tr = getByTestId("tableRow");
        expect(tr).toBeTruthy();
    });

    it("renders all <td />", () => {
        const { getAllByTestId } = render(<CourseStudent />);
        const tableDataList = getAllByTestId("tableData");
        expect(tableDataList).toHaveLength(8);
    });
});
