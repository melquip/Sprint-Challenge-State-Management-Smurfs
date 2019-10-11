import * as types from './actionTypes';
const initialSmurfs = [];
export const smurfsReducer = (smurfList = initialSmurfs, action) => {
	switch (action.type) {
		case types.SET_SMURFS:
			return action.payload;
		case types.ADD_SMURF:
			return [...smurfList, action.payload];
		default:
			return smurfList;
	}
}
export const initialForm = {
	id: null,
	name: "",
	age: "",
	height: "",
};
export const smurfFormReducer = (form = initialForm, action) => {
	switch (action.type) {
		case types.EDIT_SMURF:
			return {
				...form,
				...action.payload
			};
		case types.ON_INPUT_CHANGE:
			return {
				...form,
				[action.payload.name]: action.payload.value
			};
		default:
			return form;
	}
}