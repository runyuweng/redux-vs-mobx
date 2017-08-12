import React, {Component} from 'react';
import ListItem from './ListItem';

export default class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
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
  }

  render(){
    const records = this.state.data.map(d => <ListItem key={d.id} record={d}/>)
    return <div>
      {records}
    </div>
  }
}