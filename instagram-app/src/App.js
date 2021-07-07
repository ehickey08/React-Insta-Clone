import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/Authentication/withAuthenticate'
import styled from 'styled-components'

const AppDiv = styled.div`
    width: 800px;
    margin: 0 auto;
`

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

class App extends Component {
    render(){
        return(
            <AppDiv>
                <ComponentFromWithAuthenticate />
            </AppDiv>
        )
    }
}

export default App
