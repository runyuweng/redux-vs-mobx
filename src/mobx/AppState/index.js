
import { observable } from 'mobx'

class AppState {
  @observable messages = [{
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
  }];

  addReply(messageId, data){
    this.messages = this.messages.map((d)=>{
      if(d.id === messageId){
        d.reply.push(data);
      }
      return d;
    })
  }

  addMessage(data){
    this.messages.push(data);
  }
}

export default new AppState();