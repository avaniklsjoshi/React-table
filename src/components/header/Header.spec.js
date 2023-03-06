import { render, screen } from "@testing-library/react";

import Header from "./Header";

it("renders without crashing", () => {
	render(<Header />);
});

it("checks whether header shows react table text or not", () => {
	render(<Header />);
	expect(screen.queryByText(/Table/i)).toBeInTheDocument();
});
