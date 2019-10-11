import * as types from './actionTypes';
const initialSmurfs = [];
export const smurfsReducer = (state = initialSmurfs, action) => {
	switch (action.type) {
		case types.SET_SMURFS:
			return action.payload;
		default:
			return state;
	}
}