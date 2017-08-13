import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import ListItemTextarea from '../components/ListItemTextarea'

const ListItemTextareaContainer = ({addMessage, messages }) => (
  <ListItemTextarea onAddMessage={addMessage} messages={messages}/>
)

ListItemTextareaContainer.propTypes = {
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

const mapStateToProps =(state) =>({...state.messages});

export default connect(
  mapStateToProps,
  { addMessage }
)(ListItemTextareaContainer)