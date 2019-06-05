import React from 'react'
import PropTypes from 'prop-types'
import './CommentSection.scss';
import {Icon} from 'antd';

const Comment = props => {
    return (
        <div className = "comment-container">
            {(props.comment.username === props.username) ? <Icon onClick = {() => props.deleteComment(props.comment, props.post)}type="delete" /> : <></>}
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
