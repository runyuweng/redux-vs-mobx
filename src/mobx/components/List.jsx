import React, {Component} from 'react';
import { observer } from 'mobx-react'
import ListItem from '../components/ListItem';
import ListItemTextarea from '../components/ListItemTextarea';
import store from '../AppState';

@observer
class List extends Component{
  render(){
    const MessageList = store.messages.map(d=><ListItem key={d.id} record={d} messageId={d.id}/>)
    return (<div>
      {MessageList}
      <ListItemTextarea/>
    </div>)
  }
}

export default List;