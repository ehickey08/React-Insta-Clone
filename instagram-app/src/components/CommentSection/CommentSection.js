import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import './CommentSection.scss';

class CommentSection extends Component {
    state = {
        comments: this.props.comments
    }
    
    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key = {comment.id} comment = {comment} />)}
                <CommentInput />
            </div>
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
