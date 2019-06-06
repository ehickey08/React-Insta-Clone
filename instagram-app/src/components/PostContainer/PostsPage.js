import React, { Component } from 'react'
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar';
import Fuse from 'fuse.js'
import moment from 'moment';

class PostsPage extends Component {
    state = {
        posts: [],
        searchTerm: '',
        commentText: '',
        username: ''
    }

    componentDidMount() {
        if(!localStorage.getItem('posts')){
            setTimeout( () => 
                this.setState({
                    posts: dummyData,
                    username: JSON.parse(localStorage.getItem('username'))
                }))
        } else {
            this.setState({
                posts:JSON.parse(localStorage.getItem('posts')),
                username: JSON.parse(localStorage.getItem('username'))
            })
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.posts !== this.state.posts){
            localStorage.setItem('posts', JSON.stringify(this.state.posts));
        }
    }
    
    addNewComment = (id) => {
        const newComment = {
            username: JSON.parse(localStorage.getItem('username')),
            text: this.state.commentText,
            timestamp: moment()
        }
        
        const newPosts = JSON.parse(localStorage.getItem('posts')).map(post => {
            if(post.id === id){
                newComment.id = post.comments.length +1;
                post.comments = [...post.comments, newComment]
            }
            return post;
        })
        
        this.setState(prevState => ({
            posts: [...newPosts],
            commentText: ''
        }))
    }

    deleteComment = (comment, post) => {
        const commentIndex = post.comments.indexOf(comment);
        const selectedPost = post.id;
        const newPosts = JSON.parse(localStorage.getItem('posts')).map(post => {
            if(post.id === selectedPost){ 
                post.comments.splice(commentIndex, 1)
                post.comments = [...post.comments]
            }
            return post;
        });
        this.setState(prevState => ({
            posts: [...newPosts]
        }))
        
    }

    commentInput = (event) => {
        this.setState({
            commentText: event.target.value
        });
    }

    searchPost = (event) => {
        this.setState({
            searchTerm: event.target.value,
        })
    }
    render() {
        const fuse = new Fuse(this.state.posts, options)
        return (
            <>
                <SearchBar search = {this.searchPost} searchTerm = {this.state.searchTerm}/>
                <PostContainer
                    searchTerm = {this.state.searchTerm} 
                    posts = {this.state.searchTerm==='' ? this.state.posts : fuse.search(this.state.searchTerm)}
                    liker = {this.liker} 
                    addNewComment = {this.addNewComment}
                    commentInput = {this.commentInput}
                    commentText = {this.state.commentText}
                    deleteComment = {this.deleteComment}
                    username = {this.state.username}
                />
            </>            
        );
    }
}


const options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "username",
        "comments.username"
    ]
};



export default PostsPage
