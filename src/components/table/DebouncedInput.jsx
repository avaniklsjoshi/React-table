/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import styles from "./MovieTable.module.scss";
import { DEBOUNCE_TIME } from "../../config/constants";

export default function DebouncedInput({
	value: initialValue,
	onChange,
	debounce = DEBOUNCE_TIME,
	...props
}) {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value);
		}, debounce);

		return () => clearTimeout(timeout);
	}, [value]);

	return (
		<input
			className={`w-36 border shadow rounded ${styles.filterInput}`}
			{...props}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
}
