import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
import ProfileNavBar from './ProfileNavBar'
import FavList from './FavList';
import ToWatchList from './ToWatchList';

const serverUrl = process.env.REACT_APP_SERVER_URL

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            toWatchList: [],
            email: this.props.auth0.user.email,
            flag1: true,
        }
    }
    componentDidMount = async () => {
        const reqBody = {
            email: this.props.auth0.user.email
        }
        console.log(this.props.auth0.user.email);
        await axios.post(`${serverUrl}/users`, reqBody)
        console.log('ba3ed');

        axios.get(`${serverUrl}/users?email=${this.state.email}`).then(response => {
            console.log(response.data[0])
            this.setState({
                movieList: response.data[0].favMovie
            })
        }).catch(error => console.log(error))
    }
    getFavMovies = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/users?email=${this.state.email}`).then(response => {
            this.setState({
                movieList: response.data[0].favMovie,
                flag1:true
            })
        }).catch(error => console.log(error))
    }
    getToWatchList = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/users?email=${this.state.email}`).then(response => {
            console.log(response.data[0].to_watch)
            this.setState({
                toWatchList: response.data[0].to_watch,
                flag1:false
            })
        }).catch(error => console.log(error))
    }

    
    render() {
        return (
            <>
                <br /><br /><br /><br />
                <Navbar />
                <ProfileNavBar
                    getFavMovies={this.getFavMovies}
                    getToWatchList={this.getToWatchList}
                />
                {this.state.flag1 ?
                    <FavList
                        movieList={this.state.movieList}
                    />
                    :
                    <ToWatchList
                        toWatchList={this.state.toWatchList}
                    />
                }
                <Footer />
            </>
        )
    }
}

export default withAuth0(Profile)
