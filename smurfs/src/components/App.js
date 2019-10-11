import React from "react";
import { useSelector } from "react-redux";
import useActions from '../helpers/useActions';
import * as actionCreators from '../state/actionCreators';
import Smurfs from "./Smurfs";
import Form from "./Form";

export default function App() {
	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>
			<div>Welcome to your state management version of Smurfs!</div>
			<div>Start inside of your `src/index.js` file!</div>
			<div>Have fun!</div>
			<Smurfs />
			<Form />
		</div>
	);
}