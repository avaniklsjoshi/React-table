import DebouncedInput from "./DebouncedInput";

export default function Filter({ column }) {
	const columnFilterValue = column.getFilterValue();

	return (
		<DebouncedInput
			type="text"
			value={columnFilterValue ?? ""}
			onChange={(value) => column.setFilterValue(value)}
			placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
			list={column.id + "list"}
			data-testid={"filter" + column.columnDef.accessorKey}
		/>
	);
}
