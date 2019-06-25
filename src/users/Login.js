import React, { Component } from 'react'

export default class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUserChange = event =>{
        this.setState(
            {username: event.target.value}
        )
    }

    handlePasswordChange = event =>{
        this.setState(
            {password: event.target.value}
        )
    }

    login = ()=>{   
            alert('Email/User is ' + this.state.username + ' Password is ' + this.state.password);            
    }

    render(){
        return(
            <form className='loginForm'>
                <h2>Please sign in</h2>
                <label for='inputUser'>Email:</label>
                <input type='user' 
                    id='inputUser' 
                    className='form-control'
                    placeholder='your email/username' required autofocus
                    value={this.state.username}
                    onChange = {this.handleUserChange} />
                <label for='inputPassword'>Password:</label>
                <input type='password'
                    id='inputPassword'
                    className='form-control'
                    placeholder='your password' required
                    value={this.state.password} 
                    onChange={this.handlePasswordChange} />
                <button 
                    className='btn btn-lg btn-primary btn-block'
                    type='button'
                    onClick={this.login}>sign in</button>
            </form>
        )
    }
}