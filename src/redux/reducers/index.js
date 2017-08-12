import { combineReducers } from 'redux';
import messages from './messages';
import replies from './replies';

export default combineReducers({
  messages,
  replies
})