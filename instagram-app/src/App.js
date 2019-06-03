import React, { Component } from 'react';
import './App.scss';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
    state = {
        posts: dummyData
    }
    
    render() {
        return (
            <div className = 'app-container'>
                <SearchBar />
                <PostContainer posts = {this.state.posts} />            
            </div>
        );
    }
}

export default App
