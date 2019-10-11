import axios from 'axios';
import { initialForm } from './reducers';
import * as types from './actionTypes';

export const setSmurfs = (smurfList) => {
	return {
		type: types.SET_SMURFS,
		payload: smurfList
	}
}
export const addSmurf = (smurfData) => {
	return {
		type: types.ADD_SMURF,
		payload: smurfData
	}
}
export const setSmurfForm = (smurfData = initialForm) => {
	return {
		type: types.EDIT_SMURF,
		payload: smurfData
	}
}
export const onInputChange = (data) => {
	return {
		type: types.ON_INPUT_CHANGE,
		payload: data
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
		dispatch(setSmurfForm());
	})
	.catch(err => console.error('Couldn\'t get the smurfs', err))
}
export const putSmurf = editedSmurf => dispatch => {
	axios.put("http://localhost:3333/smurfs/" + editedSmurf.id, editedSmurf)
	.then(({ data }) => {
		dispatch(setSmurfs(data));
		dispatch(setSmurfForm());
	})
	.catch(err => console.error('Couldn\'t get the smurfs', err))
}
export const deleteSmurf = deletedSmurf => dispatch => {
	axios.delete("http://localhost:3333/smurfs/" + deletedSmurf)
	.then(({ data }) => {
		dispatch(setSmurfs(data));
		dispatch(setSmurfForm());
	})
	.catch(err => console.error('Couldn\'t get the smurfs', err))
}