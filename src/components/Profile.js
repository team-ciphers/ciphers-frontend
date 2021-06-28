import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
import ProfileNavBar from './ProfileNavBar'
import FavList from './FavList';

const serverUrl = process.env.REACT_APP_SERVER_URL

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            email: this.props.auth0.user.email,
        }
    }
    componentDidMount = async () => {
        axios.get(`${serverUrl}/users?email=${this.state.email}`).then(response => {
            console.log(response.data[0])
            this.setState({
                movieList: response.data[0].to_watch
            })
        }).catch(error => alert(error))
    }
    getFavMovies = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/users?email=${this.state.email}`).then(response => {
            this.setState({
                movieList: response.data[0].favMovie
            })
        }).catch(error => alert(error))
    }
    getToWatchList = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/users?email=${this.state.email}`).then(response => {
            console.log(response.data[0].to_watch)
            this.setState({
                movieList: response.data[0].to_watch
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
                <FavList
                    movieList={this.state.movieList}
                />
                <Footer />
            </div>
        )
    }
}

export default withAuth0(Profile)
