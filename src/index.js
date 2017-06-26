import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import "./index.css";

import store from "./store";

import App from "./components/App";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={ store }>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById( "root" )
);