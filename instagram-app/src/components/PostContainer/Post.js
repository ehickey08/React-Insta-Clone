import React from 'react'
import Poster from './Poster';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import {Icon} from 'antd'
import styled from 'styled-components'

const PostDiv = styled.div`
    border: 1px solid lightgray;
    margin: 5px 0;

    > img {
        max-width: 620px;
        margin: 0 10px;
    }

    .post-icon{
        margin: 1rem;
        font-size: 2.5rem;
    }
    
`

const LikeSpan = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 1rem;
`

class Post extends React.Component {
    state = {
        post: this.props.post,
    }

    liker = () => {
        this.setState(prevState => {
            prevState.post.likes ++;
            return {
                post: {...prevState.post}
            }
            
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const posts = JSON.parse(localStorage.getItem('posts'));
        const newPosts = posts.map(post => {
            if(post.id === this.props.post.id){
                post.likes = this.state.post.likes
            }
            return post;
        });

        localStorage.setItem('posts', JSON.stringify(newPosts));
    }
    
    render(){
        return(
            <PostDiv>
                <Poster timestamp = {this.props.post.timestamp} posterImage = {this.props.post.thumbnailUrl} username = {this.props.post.username}/>
                <img className = 'post-image' alt = 'post image' src={this.props.post.imageUrl} />
                <div className = 'choice-container'>
                    <Icon type="heart" className="post-icon" onClick = {this.liker}/>
                    <Icon type="message" className="post-icon"/>
                </div>
                <LikeSpan>{this.state.post.likes} likes</LikeSpan>
                <CommentSection 
                    post = {this.props.post} 
                    commentText = {this.props.commentText} 
                    comments = {this.props.post.comments} 
                    index = {this.props.post.id} 
                    addNewComment = {this.props.addNewComment} 
                    commentInput = {this.props.commentInput} 
                    deleteComment = {this.props.deleteComment}
                    username = {this.props.username}/>
            </PostDiv>
        );
    }
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
