import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'
import './PostContainer.scss'

const PostContainer = props => {
    if(props.posts.length ===0 && props.searchTerm.length ===0) {return <h1>Loading Data...</h1>}
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
