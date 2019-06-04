import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import './CommentSection.scss';

class CommentSection extends Component {
    state = {
        comments: this.props.comments,
        commentText: ''
    }
    

    addNewComment = (event) => {
        event.preventDefault();
        const newComment = {
            id: this.state.comments.length +1,
            username: 'Anonymous',
            text: this.state.commentText
        }

        this.setState(prevState => ({
            comments: [...prevState.comments, newComment],
            commentText: ''
        }))
    
    }

    commentInput = (event) => {
        this.setState({
            commentText: event.target.value
        });
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => 
                <Comment 
                    key = {comment.id} 
                    comment = {comment}
                 />)}
                <CommentInput 
                    addComment = {this.addNewComment} 
                    commentText = {this.state.commentText}
                    commentInput = {this.commentInput}/>
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
