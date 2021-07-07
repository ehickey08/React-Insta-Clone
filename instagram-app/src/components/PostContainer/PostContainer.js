import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostDiv = styled.div`
    height: 500px;
    max-width: 640px;
    margin: 2rem auto;
    
`
const PostContainer = ({posts, searchTerm, ...rest}) => {
    if(posts.length ===0 && searchTerm.length ===0) {return <h1>Loading Data...</h1>}
    return (
        <PostDiv>
            {posts.map(post => <Post key = {post.id} post = {post} {...rest} />)}
        </PostDiv>
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
