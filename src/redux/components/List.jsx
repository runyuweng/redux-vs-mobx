import React, {Component} from 'react';
import ListItemContainer from '../containers/ListItemContainer';

const List = (props) => {
  const MessageList = props.messages.map(d => <ListItemContainer key={d.id} record={d} messageId={d.id}/>);
  return (<div>
    {MessageList}
  </div>)
};

export default List;