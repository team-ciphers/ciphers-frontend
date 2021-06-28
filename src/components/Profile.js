import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'

const serverUrl = process.env.REACT_APP_SERVER_URL

export class Profile extends Component {
    componentDidMount = async () => {
        const reqBody = {
            email: this.props.auth0.user.email
        }
        axios.post(`${serverUrl}/users`, reqBody)
    }

    getToWatchList = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/moviesRated`).then(response => {
            this.setState({
                searchMovie: response.data,
            })
            console.log('Rated', this.state.searchMovie);
        }).catch(error => alert(error))
    }



    render() {
        return (
            <div>
                <Navbar />
                <Footer />
            </div>
        )
    }
}

export default withAuth0(Profile)
