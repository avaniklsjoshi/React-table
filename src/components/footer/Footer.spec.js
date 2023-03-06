import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

it("renders without crashing", () => {
	render(<Footer />);
});

it("checks that footer has creators name or not", () => {
	render(<Footer />);
	expect(screen.queryByText(/Avani Joshi/i)).toBeInTheDocument();
});
