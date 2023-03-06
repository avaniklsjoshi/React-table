import classNames from "./App.module.scss";
import { MovieTable } from "../components/table/Index";
import tableData from "../mock-data/data";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { SORTING_MODE } from "../config/constants";

function App() {
	return (
		<div className={classNames.app}>
			<Header />
			<section className={classNames.tableContainer}>
				<MovieTable
					columns={tableData.columns}
					rows={tableData.rows}
					initialSortColumn="number"
					initialSortDirection={SORTING_MODE.ASCENDING}
				/>
			</section>
			<Footer />
		</div>
	);
}

export default App;
