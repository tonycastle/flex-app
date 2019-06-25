import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './users/Profile'
import Login from './users/Login'
import Register from './users/Register'

const baseUrl = 'http://localhost:3012/'

ReactDOM.render(
    //<Profile baseURL = {baseUrl} />,
    <Login />,
    document.getElementById('root')
);