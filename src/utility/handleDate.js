import moment from "moment";

/**
 * Making date fit for sorting
 *
 * @param {string} date date
 * @return {string} sanitized  date
 */
export const sanitizeDate = (date) => {
	if (date.toLowerCase() === "unknown") {
		date = "01-01-9999";
	}
	if (date.length === 4) {
		date = "01-01-" + date;
	}
	if (date.length === 6) {
		date = "01-" + date;
	}

	return moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");
};

/**
 * Custom date sort function for release date in table
 *
 * @param {string} dateA first date
 * @param {string} dateB second date
 * @return {number} 0, 1, -1 for sorting the two date
 */
export const sortDateColumn = (dateA, dateB) => {
	const sanitizedDateA = sanitizeDate(dateA);
	const sanitizedDateB = sanitizeDate(dateB);

	if (sanitizedDateA < sanitizedDateB) return -1;
	else if (sanitizedDateA > sanitizedDateB) return 1;
	else return 0;
};
