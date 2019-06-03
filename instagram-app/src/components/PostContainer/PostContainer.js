import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'
import './PostContainer.scss'

const PostContainer = props => {
    return (
        <div className = 'posts-container'>
            {props.posts.map(post => <Post key = {post.id} post = {post} />)}
        </div>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.exact({
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
    ),
}

export default PostContainer
