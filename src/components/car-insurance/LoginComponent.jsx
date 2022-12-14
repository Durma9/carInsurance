import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: 'agent',
        password: '',
        hasLoginFailed: false,
        showSuccessMessage: false
      }
      // this.handleUsernameChange = this.handleUsernameChange.bind(this)
      // this.handlePasswordChange = this.handlePasswordChange.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.loginClicked = this.loginClicked.bind(this)
    }
  
    handleChange(event) {
      // console.log(event.target.name)
      this.setState(
        {
          [event.target.name]
            : event.target.value
        }
      )
    }
    // handlePasswordChange(event) {
    //   console.log(event.target.value)
    //   this.setState({password:event.target.value})
    // }
  
    loginClicked() {
      if (this.state.username === 'admin' && this.state.password === 'admin') {
        // this.props.navigate('/welcome/${this.state.username}') WELCOME SA PARAMETRIMA
        this.props.navigate('/welcome/admin')
        AuthenticationService.SuccessfulLogin(this.state.username, this.state.password);
        this.setState({ showSuccessMessage: true })
        this.setState({ hasLoginFailed: false })
      }
      if (this.state.username === 'agent' && this.state.password === 'agent') {
        this.props.navigate('/welcome/agent')
        AuthenticationService.SuccessfulLogin(this.state.username, this.state.password);
        this.setState({ showSuccessMessage: true })
        this.setState({ hasLoginFailed: false })
      }
  
      else {
        this.setState({ showSuccessMessage: false })
        this.setState({ hasLoginFailed: true })
      }
    }
  
    render() {
      return (
        <div>
          <h1>Login</h1>
          <div className="container" />
          {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
            <LoginSuccessful showSuccessMessage ={this.state.showSuccessMessage}/> */}
          {this.state.hasLoginFailed && <div className="alert alert-warning">Login failed</div>}
          {this.state.showSuccessMessage && <div>Login Successful</div>}
          User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <button className="btn" onClick={this.loginClicked}>Login</button>
        </div>
      )
    }
  
  }

  export default LoginComponent