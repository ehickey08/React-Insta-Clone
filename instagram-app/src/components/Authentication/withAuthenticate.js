import React from 'react'
import Login from '../Login/Login'

const withAuthenticate = LoginPage => Component =>
  class extends React.Component {
      state = {
          loggedIn: false
      }

      componentDidMount() {
          if(localStorage.getItem('username')){
            this.setState({loggedIn: true})
          } else{
              this.setState({loggedIn: false
              })
          }
      }
      
    render() {
        if(!this.state.loggedIn) return <LoginPage />
      
        return <Component />
    }
  };


export default withAuthenticate(Login)
