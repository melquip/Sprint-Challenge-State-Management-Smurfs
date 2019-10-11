import axios from 'axios';
import * as types from './actionTypes';

export const setSmurfs = (smurfList) => {
	return {
		type: types.SET_SMURFS,
		payload: smurfList
	}
}
export const getSmurfs = () => dispatch => {
	axios.get("http://localhost:3333/smurfs")
	.then(({ data }) => {
		dispatch(setSmurfs(data));
	})
	.catch(err => console.error('Couldn\'t get the smurfs', err))
}
export const postSmurf = newSmurf => dispatch => {
	axios.post("http://localhost:3333/smurfs", newSmurf)
	.then(({ data }) => {
		dispatch(addSmurf(data[data.length - 1]));
	})
	.catch(err => console.error('Couldn\'t get the smurfs', err))
}
export const addSmurf = (smurfData) => {
	return {
		type: types.ADD_SMURF,
		payload: smurfData
	}
}
export const onInputChange = (data) => {
	return {
		type: types.ON_INPUT_CHANGE,
		payload: data
	}
}