import React from 'react'
import { Component } from 'react'

export default class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleEmailChange = event =>{
        this.setState(
            {username: event.value}
        )
    }

    handlePasswordChange = event =>{
        this.setState(
            {password: event.value}
        )
    }

    render(){
        return(
            <form className='loginForm'>
                <h2>Please sign in</h2>
                <label for='inputEmail'>Email:</label>
                <input type='email' 
                    id='inputEmail' 
                    className='form-control'
                    placeholder='your email' required autofocus
                    value={this.state.email}
                    onChange = {this.handleEmailChange} />
                <label for='inputPassword'>Password:</label>
                <input type='password'
                    id='inputPassword'
                    className='form-control'
                    placeholder='your password' required
                    value={this.state.password} 
                    onChange={this.handlePasswordChange} />
                <button className='btn btn-lg btn-primary btn-block'
                    type='button'>sign in</button>
            </form>
        )
    }
}