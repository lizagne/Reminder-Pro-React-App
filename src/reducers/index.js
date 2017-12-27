//4th Step of Redux: setting up the reducer

import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

//helper reminder function
const reminder = (action) => {
  let { text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
}

const removeById = (state = [], id) => { 
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
  return reminders;
}

const reminders = (state = [], action) => { //state is pre-initialised to an empty array

  let reminders = null;
  state = read_cookie('reminders');

  switch(action.type) { //we need a switch because we need to have different actions
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]; //using spread operator to copy contents of one array into new array.
      bake_cookie('reminders', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;
    default:
      return state; //return the original state if none of these actions are called.
  }
}

export default reminders;
