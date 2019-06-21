import React from 'react'
import ReactDOM from 'react-dom'
import { Component} from 'react'

export default class Profile extends Component {
    render(){
        return(
            <div>
                <h1>Profile page</h1>
            </div>
        )
    }
}

//profile page should display the users profile,  allow the profile to be edited, upload an image etc 
//the profile will download from a rest call and be displayed.
//there will be a separate component to upload a new profile.
//