import { ADD_REMINDER } from '../constants';


const reminder = (action) => {
	return {
		text: action.text,
		id: Math.random()
	}
}


const reminders = (state=[], action ) => { //second argument is action
	let reminders = null; //later we will change this to be the returned state //action returns a type

	switch(action.type){ //using a switch statement on the action type because we expect more than 1 type of action in the future besides ADD_REMINDER
		case ADD_REMINDER:
			reminders = [ ...state, reminder(action) ] //spread syntax 
			console.log('reminders as state', reminders);
			return reminders;
		default: 
			return state; //from above	
	}
}

export default reminders;