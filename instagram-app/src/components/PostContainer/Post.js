import React from 'react'
import Poster from './Poster';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import './PostContainer.scss'

const Post = props => {
    
    return (
        <div className = 'post'>
            <Poster posterImage = {props.post.thumbnailUrl} username = {props.post.username}/>
            <img className = 'post-image' alt = 'post image' src={props.post.imageUrl} />
            <CommentSection comments = {props.post.comments} />
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.exact({
        id: PropTypes.string,
        username:PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl:PropTypes.string,
        likes:PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.number,
                username: PropTypes.string,
                text: PropTypes.string,
            }),
        ),

    })
}

export default Post
