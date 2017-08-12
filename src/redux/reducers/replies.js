import { ADD_REPLY } from '../constants/ActionTypes';

const replies = (state, action) => {
  switch (action.type) {
    case ADD_REPLY:
      return {
        ...state
      }
    default:
      return state
  }
}