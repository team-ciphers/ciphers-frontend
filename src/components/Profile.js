import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
const serverUrl = process.env.REACT_APP_SERVER_URL

export class Profile extends Component {
    componentDidMount = async () => {
        const reqBody = {
            email: this.props.auth0.user.email
        }
        console.log(this.props.auth0.user.email);
        axios.post(`${serverUrl}/users`, reqBody)
        console.log('ba3ed');
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default withAuth0(Profile)
