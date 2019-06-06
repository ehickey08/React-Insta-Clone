import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'antd';
import {PosterName} from '../PostContainer/Poster'
import styled from 'styled-components'

const CommentName = styled(PosterName)`
    margin-right: 7px;
`

const CommentText = styled(PosterName)`
    font-weight:400;
    margin: 0;
`

const CommentDiv = styled.div`
    margin-left: 2rem;
    padding: 3px;
    display: flex;

    .delete-icon{
        display:none;
        margin-left: -1.5rem;
        font-size: 1.5rem;
        margin-top: 0.4rem;
    }

    &:hover{
        .delete-icon{
            display: block;
        }
    }
`
const Comment = props => {
    return (
        <CommentDiv>
            {(props.comment.username === props.username) ? 
                <Icon 
                className = 'delete-icon' 
                onClick = {() => props.deleteComment(props.comment, props.post)}
                type="delete" /> : 
                <></>
            }
            <CommentName>{props.comment.username}</CommentName>
            <CommentText>{props.comment.text}</CommentText>
        </CommentDiv>
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
