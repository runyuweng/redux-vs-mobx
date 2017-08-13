import React, {Component} from 'react';
import { observer } from 'mobx-react'
import './ListItemTextarea.css';
import store from '../AppState';

@observer
export default class ListItemTextarea extends Component{
  constructor(props){
    super(props);
    this.state = {
      textContent: ''
    }
  }

  handleSubmit = () => {
    store.addMessage({
      id: String(store.messages.length),
      name: 'wry',
      timeStamp: Date.parse(new Date()),
      words: this.state.textContent,
      reply: []
    })
    this.setState({
      textContent: ''
    })
  }

  handleCancel = () => {
    this.setState({
      textContent: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      textContent: e.target.value
    })
  }

  render(){
    return (<div className='list-textarea-block'>
      <textarea
        value={this.state.textContent}
        onChange={this.handleChange}
        className='list-item-textarea'
        placeholder='请在此输入回复内容'/>
        <div className='btn-group'>
          <span onClick={this.handleSubmit}>
            发布
          </span>
          <span onClick={this.handleCancel}>
            取消
          </span>
        </div>
    </div>)
  }
}