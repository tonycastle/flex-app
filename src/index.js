//This file jsut sets up some global variables, passesthem into the App and renders App
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const baseUrl = 'http://localhost:3012/'

ReactDOM.render(
    //<Profile baseURL = {baseUrl} />,
    <App baseURL = {baseUrl} />,
    document.getElementById('root')
);