import React, { Component } from 'react';
import './App.scss';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
    state = {
        posts: [],
        searchTerm: ''
    }

    componentDidMount() {
        setTimeout( () => 
            this.setState({
                posts: dummyData
            }))
    }
    
    searchPost = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    
    render() {
        return (
            <div className = 'app-container'>
                <SearchBar search = {this.searchPost} searchTerm = {this.state.searchTerm}/>
                <PostContainer
                    searchTerm = {this.state.searchTerm} 
                    posts = {this.state.posts.filter(
                        post => post.username.toLowerCase().includes(this.state.searchTerm.toLowerCase()))} 
                    liker = {this.liker} />            
            </div>
        );
    }
}

export default App
