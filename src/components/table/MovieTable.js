import * as React from "react";
import { SORTING_MODE } from "../../config/constants";
import { fuzzyFilter } from "./fuzzyFilter";
import Filter from "./Filter";
import { sortDateColumn } from "../../utility/handleDate";
import { filterColWithExactString } from "../../utility/handleNumberColumnsFilter";

import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	getFilteredRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	useReactTable
} from "@tanstack/react-table";
import styles from "./MovieTable.module.scss";
import { ReactComponent as Asc } from "../../svg-icons/order-ascending.svg";
import { ReactComponent as Desc } from "../../svg-icons/order-descending.svg";

const MovieTable = (props) => {
	const [columnFilters, setColumnFilters] = React.useState([]);

	const [sorting, setSorting] = React.useState([
		{
			id: props.initialSortColumn,
			desc: props.initialSortDirection === SORTING_MODE.DESCENDING
		}
	]);

	const columns = React.useMemo(
		() => [
			{
				accessorKey: "number",
				header: "Number",
				filterFn: (rows, columnIds, filterValue) =>
					filterColWithExactString(rows.original.number, filterValue)
			},
			{
				accessorKey: "title",
				header: "Movie"
			},
			{
				accessorKey: "releaseDate",
				header: "Release Date",
				sortingFn: (a, b) =>
					sortDateColumn(a.original.releaseDate, b.original.releaseDate)
			},
			{
				accessorKey: "productionBudget",
				header: "Production Budget",
				// filterFn: "fuzzy" // my personal choice
				filterFn: (rows, columnIds, filterValue) =>
					filterColWithExactString(rows.original.productionBudget, filterValue)
			},
			{
				accessorKey: "worldwideBoxOffice",
				header: "Worldwide Box Office",
				filterFn: (rows, columnIds, filterValue) =>
					filterColWithExactString(
						rows.original.worldwideBoxOffice,
						filterValue
					)
			}
		],
		[]
	);

	const table = useReactTable({
		data: props.rows,
		columns,
		state: {
			sorting,
			columnFilters
		},
		enableSortingRemoval: false, // true will enable default state as well changing sort order will circle like: 'none' -> 'desc' -> 'asc' -> 'none' -> ...
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: false, // dynamically switch off all debug mode for prod env, or make it available programatically
		debugHeaders: false,
		debugColumns: false,
		filterFns: {
			fuzzy: fuzzyFilter
		},
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues()
	});

	return (
		<>
			<table className={styles.table} data-testid="table-test">
				<thead>
					<tr>
						{table.getHeaderGroups()[0].headers.map((header) => (
							<th key={header.id} data-testid="table-head">
								{header.isPlaceholder ? null : (
									<>
										<div
											data-testid={
												"table-column-" + header.column.columnDef.accessorKey
											}
											{...{
												className: header.column.getCanSort()
													? `cursor-pointer select-none ${styles.tableHeaderCell}`
													: "",
												onClick: header.column.getToggleSortingHandler()
											}}
										>
											{flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
											{{
												asc: <Asc />,
												desc: <Desc />
											}[header.column.getIsSorted()] ?? null}
										</div>
										{header.column.getCanFilter() ? (
											<div>
												<Filter column={header.column} table={table} />
											</div>
										) : null}
									</>
								)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id} data-testid="table-row">
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div className={styles.numberOfRows}>
				{table.getRowModel().rows.length} Rows
			</div>
		</>
	);
};
export default MovieTable;
