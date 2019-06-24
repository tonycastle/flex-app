import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './profile/Profile'

const baseUrl = 'http://localhost:3012/'

ReactDOM.render(
    <Profile baseURL = {baseUrl} />,
    document.getElementById('root')
);