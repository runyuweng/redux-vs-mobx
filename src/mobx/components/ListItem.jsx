import React, {Component} from 'react';
import { observer } from 'mobx-react'
import PropTypes from 'prop-types';
import './ListItem.css';
import store from '../AppState';

@observer
export default class ListItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      record: props.record,
      showTextarea: false,
      replyContent: ''
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      record: props.record
    })
  }

  handleReply = () => {
    this.setState({
      showTextarea: !this.state.showTextarea
    })
  }

  handleSave = () => {
    store.addReply(this.props.messageId,{
      id: String(this.state.record.reply.length),
      name: 'wry',
      timeStamp: Date.parse(new Date()),
      words:this.state.replyContent
    })
    this.setState({
      showTextarea: !this.state.showTextarea,
    })
  }

  handleChangeReply =(e) => {
    this.setState({
      replyContent: e.target.value
    })
  }

  render(){
    const {record, showTextarea} = this.state;
    const replyList = this.state.record.reply.map(d=><div className='list-item-reply-item' key={d.id}>
      <div className='list-item-title'>
        <span>{d.name}</span>
        <span>{new Date(d.timeStamp).toString()}</span>
      </div>
      <div>
        <pre>
          {d.words}
        </pre>
      </div>
    </div>)

    return <div className='list-item'>
      <div className='list-item-title'>
        <span>{`${record.name}:`}</span>
        <span>{new Date(record.timeStamp).toString()}</span>
      </div>
      <div className='list-item-body'>
        <pre>
          {record.words}
        </pre>
      </div>
      <div className='list-item-reply'>
        {showTextarea?<span onClick={this.handleSave}>
          保存
        </span>:''}
        <span onClick={this.handleReply}>
          {showTextarea?'取消':'回复'}
        </span>
      </div>
      {showTextarea?
      <textarea
      className='list-item-textarea'
      placeholder='请在此输入回复内容'
      onChange={this.handleChangeReply}/>
      :''}

      <div className='list-item-reply-list'>
        {replyList}
      </div>
    </div>
  }
}

ListItem.propTypes = {
  record: PropTypes.object.isRequired
};