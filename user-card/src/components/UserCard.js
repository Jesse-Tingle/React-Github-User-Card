import React, { Component } from 'react'
import axios from 'axios'

export default class UserCard extends Component {
    constructor(){
        super()
            this.state = {
                user: []
            }
    }
    
    componentDidMount() {
        this.fetchUserData()
    }

    fetchUserData() {
        axios.get(`https://api.github.com/users/Jesse-Tingle`)
        .then(res => {
            const user = res.data;
            this.setState({ user });
            console.log('res', res)
          })
        .catch(err => {
            console.log('Error', err)
        })
    }


    render() {
        return (
            <div className="userCard">
                <img src={this.state.user.avatar_url} alt="github profile" />
                <h1>{this.state.user.name}</h1>
                <h3>{this.state.user.login}</h3>
                <p>{this.state.user.html_url}</p>
                <p>{this.state.user.followers}</p>
                <p>{this.state.user.following}</p>
                <p>{this.state.user.bio}</p>
            </div>
        )
    }
}
