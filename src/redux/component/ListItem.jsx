import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';
import _ from 'lodash';

export default class ListItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      record: props.record,
      showTextarea: false,
      replyContent: ''
    }
  }

  handleReply = () => {
    this.setState({
      showTextarea: !this.state.showTextarea
    })
  }

  handleSave = () => {
    const record = _.cloneDeep(this.state.record);
    record.reply.push({
      id: '',
      name: 'wry',
      words: this.state.replyContent,
      timeStamp: Date.parse(new Date())
    })
    this.setState({
      showTextarea: !this.state.showTextarea,
      record: record
    })
  }

  handleChangeReply =(e) => {
    console.log(e.target.value)
    this.setState({
      replyContent: e.target.value
    })
  }

  render(){
    const {record, showTextarea} = this.state;
    const replyList = this.state.record.reply.map(d=><div className='list-item-reply-item'>
      <div className='list-item-title'>
        <span>{d.name}</span>
        <span>{new Date(d.timeStamp).toString()}</span>
      </div>
      <div>
        {d.words}
      </div>
    </div>)

    return <div className='list-item'>
      <div className='list-item-title'>
        <span>{`${record.name}:`}</span>
        <span>{new Date(record.timeStamp).toString()}</span>
      </div>
      <div className='list-item-body'>
        {record.words}
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