import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useActions from '../helpers/useActions';
import * as actionCreators from '../state/actionCreators';

export default function Smurfs() {
	const { smurfs } = useSelector(state => state);
	const [getSmurfs, setSmurfForm, deleteSmurf] = useActions([actionCreators.getSmurfs, actionCreators.setSmurfForm, actionCreators.deleteSmurf])
	useEffect(() => {
		getSmurfs();
		return () => { };
	}, [])
	const onSmurfEdit = id => e => {
		let editingSmurf = { ...smurfs.find(smurf => smurf.id.toString() === id.toString()) };
		editingSmurf.height = editingSmurf.height.replace('cm', '');
		setSmurfForm(editingSmurf);
	}
	const onSmurfDelete = id => e => {
		deleteSmurf(id);
	}
	return (
		<>
			<h1>Smurf List</h1>
			<div className="smurfs">
				{
					smurfs.length ? smurfs.map(smurf => (
						<div className="smurf" key={smurf.id}>
							<div className="smurf_name">Name: {smurf.name}</div>
							<div className="smurf_age">Age: {smurf.age}</div>
							<div className="smurf_height">Height: {smurf.height}</div>
							<button onClick={onSmurfEdit(smurf.id)}>Edit</button>
							<button onClick={onSmurfDelete(smurf.id)}>Delete</button>
						</div>
					)) : "No smurfs found"
				}
			</div>
		</>
	);
}