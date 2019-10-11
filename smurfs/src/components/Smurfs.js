import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useActions from '../helpers/useActions';
import * as actionCreators from '../state/actionCreators';

export default function Form() {
	const { smurfs } = useSelector(state => state);
	const [ getSmurfs ] = useActions([actionCreators.getSmurfs])
	useEffect(() => {
		getSmurfs();
		return () => {};
	}, [])
	return (
		<div className="smurfs">
			{
				smurfs.length ? smurfs.map(smurf => (
					<div className="smurf">
						<div className="smurf_name">Name: {smurf.name}</div>
						<div className="smurf_age">Age: {smurf.age}</div>
						<div className="smurf_height">Height: {smurf.height}</div>
					</div>
				)) : "No smurfs found"
			}
		</div>
	);
}