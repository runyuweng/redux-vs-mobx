import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addReply } from '../actions'
import ListItem from '../components/ListItem'

const ListItemContainer = ({record, addReply, messageId }) => (
  <ListItem onAddReply = {addReply} record = {record}  messageId={messageId}/>
)

ListItemContainer.propTypes = {
  messageId: PropTypes.string.isRequired,
  record: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    words: PropTypes.string.isRequired,
    timeStamp: PropTypes.number.isRequired
  }).isRequired,
  addReply: PropTypes.func.isRequired
}

const mapStateToProps =(state) =>({});

export default connect(
  mapStateToProps,
  { addReply }
)(ListItemContainer)