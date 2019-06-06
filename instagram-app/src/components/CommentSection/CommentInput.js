import React from 'react'
import {Input} from 'antd';
import styled from 'styled-components'

const CommentForm = styled.form`
    margin: 1rem 0;
    input{
        border:none;
        &:hover{
            border: 1px solid #d9d9d9;
        }
    }
`
const CommentInput = props => {
    return (
        <CommentForm onSubmit = {(e) => {
            e.preventDefault();
            props.addComment(props.post.id)
        }}>
            <Input 
                placeholder="Add a comment..." 
                required = 'Must fill out' 
                value = {props.commentText} 
                onChange = {(event) => props.commentInput(event)} />
        </CommentForm>
    );
}


export default CommentInput
