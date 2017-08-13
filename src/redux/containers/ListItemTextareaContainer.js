import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import ListItemTextarea from '../components/ListItemTextarea'

const ListItemTextareaContainer = ({addMessage }) => (
  <ListItemTextarea onAddMessage = {addMessage} />
)

ListItemTextareaContainer.propTypes = {
  addMessage: PropTypes.func.isRequired
}

const mapStateToProps =(state) =>({});

export default connect(
  mapStateToProps,
  { addMessage }
)(ListItemTextareaContainer)