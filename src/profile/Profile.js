import React from 'react'
//import ReactDOM from 'react-dom'
import { Component} from 'react'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            profile: {}
        }
    }

    componentDidMount(){
        fetch(`${this.props.baseURL}profile/1`)
        .then(function(response){
            return response.json()
        })
        .then(jsonObj => {
            this.setState({
                profile: jsonObj
            })
        })
    }

    displayProfile(){
        const output = Object.entries(this.state.profile).map((e,i) =>{
            return <p key={i}>{e[0]} : {e[1]}</p>
        })
        return output
    }

    render(){
        return(
            <div>
                <h1>Profile page</h1>
                {this.displayProfile()}
            </div>
        )
    }
}

//profile page should display the users profile,  allow the profile to be edited, upload an image etc 
//the profile will download from a rest call and be displayed.
//there will be a separate component to upload a new profile.
//