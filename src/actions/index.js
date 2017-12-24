import { ADD_REMINDER } from '../constants';

//making the action creator

//going to be an anonymous arrow function and it'll have one parameter

export const addReminder = (text) => {

	const action = {
		type: ADD_REMINDER,//this has to match from the constants!
		text: text //this is the equivalent to the payload - or just data
	}

	console.log('action in addReminder', action);
	return action;

}