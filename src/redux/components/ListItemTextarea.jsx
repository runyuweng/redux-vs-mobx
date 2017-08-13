import React, {Component} from 'react';
import './ListItemTextarea.css';

const ListItemTextarea = (props) => {
  return (<div className='list-textarea-block'>
    <textarea
      className='list-item-textarea'
      placeholder='请在此输入回复内容'
      onChange={this.handleChangeReply}/>
      <div className='btn-group'>
        <span>
          发布
        </span>
        <span>
          取消
        </span>
      </div>
  </div>)
};

export default ListItemTextarea;