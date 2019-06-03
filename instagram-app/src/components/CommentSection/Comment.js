import React from 'react'
import PropTypes from 'prop-types'
import './CommentSection.scss';

const Comment = props => {
    return (
        <div className = "comment-container">
            <div className = "comment-username">{props.comment.username}</div>
            <div className = "comment">{props.comment.text}</div>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.exact({
        id: PropTypes.number,
        username: PropTypes.string,
        text: PropTypes.string,
    }),
}

export default Comment
