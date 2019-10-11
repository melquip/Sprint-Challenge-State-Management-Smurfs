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