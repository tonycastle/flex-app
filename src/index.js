import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './profile/Profile'
import Login from './Login'

const baseUrl = 'http://localhost:3012/'

ReactDOM.render(
    //<Profile baseURL = {baseUrl} />,
    <Login />,
    document.getElementById('root')
);