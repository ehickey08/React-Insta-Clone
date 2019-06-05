import React from 'react'
import Poster from './Poster';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import './PostContainer.scss'
import {Icon} from 'antd'

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
            <div className = 'post'>
                <Poster posterImage = {this.props.post.thumbnailUrl} username = {this.props.post.username}/>
                <img className = 'post-image' alt = 'post image' src={this.props.post.imageUrl} />
                <div className = 'choice-container'>
                    <Icon type="heart" className="post-icon" onClick = {this.liker}/>
                    <Icon type="message" className="post-icon"/>
                </div>
                <span className = "likes">{this.state.post.likes} likes</span>
                <CommentSection 
                    post = {this.props.post} 
                    commentText = {this.props.commentText} 
                    comments = {this.props.post.comments} 
                    index = {this.props.post.id} 
                    addNewComment = {this.props.addNewComment} 
                    commentInput = {this.props.commentInput} 
                    deleteComment = {this.props.deleteComment}
                    username = {this.props.username}/>
            </div>
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
