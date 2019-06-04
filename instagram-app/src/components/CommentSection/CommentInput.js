import React from 'react'
import PropTypes from 'prop-types'
import './CommentSection.scss';
import {Input} from 'antd';

const CommentInput = props => {
    return (
        <form onSubmit = {props.addComment}>
            <Input 
                placeholder="Add a comment..." 
                required = 'Must fill out' 
                value = {props.commentText} 
                onChange = {props.commentInput} />
        </form>
    );
}


export default CommentInput
