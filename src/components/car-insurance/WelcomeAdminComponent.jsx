import React, { Component } from 'react'
import HelloWorldService from './api/HelloWorldService'

class WelcomeAdminComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      welcomeMessage : ''
    }
    this.getWelcomeMessage = this.getWelcomeMessage.bind(this)
    this.handleSuccResponse = this.handleSuccResponse.bind(this)
  }

    render() {
      // return <div>Welcome {this.props.params.name}</div> WELCOME SA PARAMETRIMA 
      return (
        <>
        <h1>Welcome Admin!</h1>
        <div className='container'>Click Here if you want :)
        <button onClick={this.getWelcomeMessage} className="btn btn-success"></button>
        </div>

        <div className='container'>
           {this.state.welcomeMessage}
        </div>
        </>
      
        
        )
    }

    getWelcomeMessage() {
      HelloWorldService.executeHelloWorldService()
      .then(response => this.handleSuccResponse(response))
      // .catch()
    }

    handleSuccResponse(response) {
      this.setState({welcomeMessage: response.data})
       }

  }

  export default WelcomeAdminComponent