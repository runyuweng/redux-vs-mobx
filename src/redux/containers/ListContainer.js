import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import List from '../components/List'

const ListContainer = ({messages, addMessage }) => (
  <List onaddMessage={addMessage} messages={messages}/>
)

ListContainer.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      words: PropTypes.string.isRequired,
      timeStamp: PropTypes.number.isRequired
    })
  ).isRequired,
  addMessage: PropTypes.func.isRequired
}

const mapStateToProps =(state) =>{
  return ({...state.messages});
};

export default connect(
  mapStateToProps,
  { addMessage }
)(ListContainer)