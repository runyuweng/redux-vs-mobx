import {ADD_MESSAGE, ADD_REPLY} from '../constants/ActionTypes';
export const addMessage = (text) => ({
  type: ADD_MESSAGE,
  text
})

export const addReply = (text) => ({
  type: ADD_REPLY,
  text
})