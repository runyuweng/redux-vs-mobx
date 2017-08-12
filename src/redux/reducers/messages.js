import { ADD_MESSAGE, ADD_REPLY } from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = {
  messages : [
    {
      name: 'wry',
      id: '0',
      words:'hhh',
      timeStamp: Date.parse(new Date()),
      reply:[]
    },
    {
      name: 'wry',
      id: '1',
      words:'hhh',
      timeStamp: Date.parse(new Date()),
      reply:[]
    },
    {
      name: 'wry',
      id: '2',
      words:'hhh',
      timeStamp: Date.parse(new Date()),
      reply:[]
    },
    {
      name: 'wry',
      id: '3',
      words:'hhh',
      timeStamp: Date.parse(new Date()),
      reply:[]
    }
  ]
}

const messages = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state
      }

    case ADD_REPLY:
      const newState = _.cloneDeep(state);
      const newMessages = newState.messages.map(d => {
        if(d.id === action.text.messageId){
          d.reply.push(action.text.reply)
        }
        return d;
      })
      newState.messages = newMessages;
      return newState;
    default:
      return state
  }
}


export default messages;