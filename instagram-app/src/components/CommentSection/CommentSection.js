import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
    render() {
        return (
            <>
                {this.props.comments.map(comment => 
                <Comment 
                    key = {comment.id} 
                    comment = {comment}
                    deleteComment = {this.props.deleteComment}
                    username = {this.props.username}
                    post = {this.props.post}
                 />)}
                <CommentInput 
                    post = {this.props.post}
                    addComment = {this.props.addNewComment} 
                    commentText = {this.props.commentText}
                    commentInput = {this.props.commentInput}/>
            </>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            username: PropTypes.string,
            text: PropTypes.string,
        }),
    ),
}
export default CommentSection
