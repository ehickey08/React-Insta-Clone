import React, { Component } from 'react';
import './App.scss';
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/Authentication/withAuthenticate'
import Login from './components/Login/Login'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

class App extends Component {
    render(){
        return(
            <div className = 'app-container'>
                <ComponentFromWithAuthenticate />
            </div>
        )
    }
}

export default App
