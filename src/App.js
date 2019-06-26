import React, { Component } from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Login from './users/Login'
import Profile from './users/Profile'
import Register from './users/Register'
import Nav from './components/Nav'


//App baasically is just the default layout and Router setup.
export default class App extends Component{
    render(){
        return(
            <Router>
                <div id='header'>
                    <h1>FLEX</h1>
                    <Nav />
                </div>
                <Switch>
                 <Route path='/' exact component={Login}></Route>
                 <Route 
                    path='/profile'
                     render ={(props)=><Profile {...props} baseURL={this.props.baseURL} />} 
                 />
                 <Route path='/register' exact component={Register}></Route>
                </Switch>
            </Router>
        )
    }
}