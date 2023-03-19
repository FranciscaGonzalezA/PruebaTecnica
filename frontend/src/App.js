import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PaginaEntidad, PaginaSelector } from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/entidad" element={<PaginaEntidad />} />
				<Route path="/selector" element={<PaginaSelector />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;