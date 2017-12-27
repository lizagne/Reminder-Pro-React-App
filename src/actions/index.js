//2nd Step of Redux: Creating the actions

//import in the constants
import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

//export individual actions, always have a type, and then pass in any other data types you want to action, these are anonymous functions
export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER, //type is the constant
    text, //es6 shorthand syntax means it's text: text
    dueDate
  }
  console.log('action in addReminder', action); //console log to understand what's happening at each stage
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in actions', action);
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}
