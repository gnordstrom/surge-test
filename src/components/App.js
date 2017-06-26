import React from "react";

import router from '../router.js';
import Nav from "./Nav/Nav";

import "./App.css";

export function App( { children } ) {
	return (
		<div className="app">
			<Nav />
			{ router }
		</div>
	);
}

export default App;
