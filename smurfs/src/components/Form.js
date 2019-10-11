import React from "react";
import { useSelector } from "react-redux";
import useActions from '../helpers/useActions';
import * as actionCreators from '../state/actionCreators';

export default function Form() {
	const { addSmurfForm } = useSelector(state => state);
	const [postSmurf, onInputChange] = useActions([actionCreators.postSmurf, actionCreators.onInputChange])
	const onFormSubmit = (e) => {
		e.preventDefault();
		postSmurf(
			Object.values(e.target)
				.reduce((fields, field) => {
					if (field.name) fields[field.name] = field.value;
					if (field.name === 'height') fields[field.name] += 'cm';
					return fields;
				}, {})
		);
	}
	const changeInput = e => {
		onInputChange({ name: e.target.name, value: e.target.value, })
	}
	return (
		<>
			<h1>Add a smurf!</h1>
			<form onSubmit={onFormSubmit}>
				<label htmlFor="name">Name:</label>
				<input
					id="name"
					name="name"
					type="text"
					value={addSmurfForm.name}
					onChange={changeInput}
				/>
				<label htmlFor="age">Age:</label>
				<input
					id="age"
					name="age"
					type="number"
					min="0"
					value={addSmurfForm.age}
					onChange={changeInput}
				/>
				<label htmlFor="height">Height: (in cm)</label>
				<input
					id="height"
					name="height"
					type="number"
					min="0"
					value={addSmurfForm.height}
					onChange={changeInput}
				/>
				<button type="submit">Add smurf</button>
			</form>
		</>
	);
}