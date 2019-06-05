import React from 'react'
import PropTypes from 'prop-types'
import './CommentSection.scss';
import {Input} from 'antd';

const CommentInput = props => {
    return (
        <form onSubmit = {(e) => {
            e.preventDefault();
            props.addComment(props.post.id)
        }}>
            <Input 
                placeholder="Add a comment..." 
                required = 'Must fill out' 
                value = {props.commentText} 
                onChange = {(event) => props.commentInput(event)} />
        </form>
    );
}


export default CommentInput
