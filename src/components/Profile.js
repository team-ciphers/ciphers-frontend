import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
import ProfileNavBar from './ProfileNavBar'

const serverUrl = process.env.REACT_APP_SERVER_URL

export class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            movieList:[]

        }
    }
    componentDidMount = async () => {
        axios.post(`${serverUrl}/users?email=${this.props.auth0.user.email}`).then(response => {
            this.setState({
                movieList: response.data.to_watch              
            })
        }).catch(error => alert(error))
    }
    getFavMovies = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/users?email=${this.props.auth0.user.email}`).then(response => {
            this.setState({
                movieList: response.data.favMovie
            })
        }).catch(error => alert(error))
    }
    getToWatchList = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/users?email=${this.props.auth0.user.email}`).then(response => {
            this.setState({
                movieList: response.data.to_watch
            })
        }).catch(error => alert(error))
    }
    render() {
        return (
            <div>
                <Navbar />
                <ProfileNavBar
                getFavMovies={this.getFavMovies}
                getToWatchList={this.getToWatchList}
                />
                <Footer />
            </div>
        )
    }
}

export default withAuth0(Profile)
