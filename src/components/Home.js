import React, { Component } from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { withAuth0 } from "@auth0/auth0-react";

export class Home extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <div>
                {
                    isAuthenticated ? <LogoutButton /> : <LoginButton />
                }
            </div>
        )
    }
}

export default withAuth0(Home);
