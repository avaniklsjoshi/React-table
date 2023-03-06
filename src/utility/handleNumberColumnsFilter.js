/**
 * If the item is present in the table with the matching filter Value
 *
 * @param {number} rowsItem The number to raise.
 * @param {string} filterValue The power, must be a natural number.
 * @return {boolean} true- item exists, false- item does not exist
 */
export const filterColWithExactString = (rowsItem, filterValue) => {
	return rowsItem === parseInt(filterValue); // can also check for substring, if not exact match
};
