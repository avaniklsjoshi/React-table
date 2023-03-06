import MovieTable from "./MovieTable";
import {
	cleanup,
	render,
	screen,
	fireEvent,
	waitFor
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import data from "../../mock-data/data";

beforeEach(() => {
	cleanup();
});

describe("Table", () => {
	it("renders without crashing", () => {
		render(
			<MovieTable
				columns={data.columns}
				rows={data.rows}
				initialSortColumn="number"
				initialSortDirection="asc"
			/>
		);
	});
	it("should have Number, Movie, Release Date, Production Budget and Worldwide Box Office in the table headers and have 26 rows", () => {
		render(
			<MovieTable
				columns={data.columns}
				rows={data.rows}
				initialSortColumn="number"
				initialSortDirection="asc"
			/>
		);

		data.columns.forEach((key) => {
			expect(screen.getAllByText(key.title)).toBeTruthy();
		});
		const tableRows = screen.getAllByTestId("table-row");
		expect(tableRows.length).toBe(data.rows.length);
	});

	describe("sorting", () => {
		it("sort number column in asc order and then desc", () => {
			render(
				<MovieTable
					columns={data.columns}
					rows={data.rows}
					initialSortColumn="number"
					initialSortDirection="asc" //initially sorted asc
				/>
			);
			const columnHeaderNumber = screen.getByTestId("table-column-number");
			fireEvent.click(columnHeaderNumber); // will trigger desc sort
			const tableRowsDesc = screen.getAllByTestId("table-row");
			expect(tableRowsDesc[0].firstChild).toHaveTextContent(26);
			expect(tableRowsDesc[25].firstChild).toHaveTextContent(1);

			//sorting asc again
			fireEvent.click(columnHeaderNumber);
			const tableRowsAsc = screen.getAllByTestId("table-row");
			expect(tableRowsAsc[0].firstChild).toHaveTextContent(1);
			expect(tableRowsAsc[25].firstChild).toHaveTextContent(26);
			const textContent = tableRowsAsc.map((row) => {
				return row.firstChild.textContent;
			});
			expect(textContent).toMatchSnapshot();
		});
	});

	describe("filtering", () => {
		it("filtering column Number", () => {
			render(
				<MovieTable
					columns={data.columns}
					rows={data.rows}
					initialSortColumn="number"
					initialSortDirection="asc"
				/>
			);
			const filterNumber = screen.getByTestId("filternumber");
			expect(filterNumber).toBeInTheDocument();

			userEvent.type(filterNumber, 21);

			// For debounced setTimeout Fn
			waitFor(() => {
				const tableRows = screen.getAllByTestId("table-row");
				expect(tableRows.length).toBe(1);
			});
		});

		it("filtering column Movie Title and add Production Budget another column, faceted filter", () => {
			render(
				<MovieTable
					columns={data.columns}
					rows={data.rows}
					initialSortColumn="number"
					initialSortDirection="asc"
				/>
			);
			const filterTitle = screen.getByTestId("filtertitle");
			expect(filterTitle).toBeInTheDocument();

			const tableRows = screen.getAllByTestId("table-row");
			expect(tableRows.length).toBe(26);

			//waitFor
			userEvent.type(filterTitle, "ir");
			waitFor(() => {
				const tableRows = screen.getAllByTestId("table-row");
				expect(tableRows.length).toBe(4);
			});

			const filterProductionBudget = screen.getByTestId(
				"filterproductionBudget"
			);
			expect(filterProductionBudget).toBeInTheDocument();
			userEvent.type(filterProductionBudget, 170000000);
			waitFor(() => {
				const tableRows = screen.getAllByTestId("table-row");
				expect(tableRows.length).toBe(1);
			});
		});
	});
});
