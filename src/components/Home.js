import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import SearchForm from './SearchForm'
import '../home.css'
import MovieCard from './MovieCard';
import Navbar from './Navbar'
import Profile from './Profile'

import { useAuth0 } from "@auth0/auth0-react";

import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const serverUrl = process.env.REACT_APP_SERVER_URL

export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movieName: '',
            poster: false,
            searchMovie: [],
        }
    }

    componentDidMount = async () => {

        await axios.get(`${serverUrl}/moviesPopular`).then(response => {
            this.setState({
                mostPopularMoviesData: response.data,

            })
        }).catch(error => alert(error))
        await axios.get(`${serverUrl}/moviesRated`).then(response => {
            this.setState({
                topRatedMoviesData: response.data,
            })
        }).catch(error => alert(error))
        await axios.get(`${serverUrl}/moviesUpcoming`).then(response => {
            this.setState({
                upComingMoviesData: response.data,
            })
        }).catch(error => alert(error))
    }

    getMovieName = (e) => {
        this.setState({
            movieName: e.target.value,
        })
    }

    MovieSearchByName = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/movies?movie=${this.state.movieName}`).then(response => {
            this.setState({
                searchMovie: response.data,
            })
            console.log('most', response.data);
        }).catch(error => alert(error))
    }
    
    render() {
        const { isAuthenticated } = this.props.auth0;

        return (
            <div>
                {/* <Header /> */}
                <Navbar />

                {this.state.searchMovie.map(() => {
                    return <MovieCard />;
                })}

                {
                    isAuthenticated ?
                    <>
                        <LogoutButton />
                        <Profile/>
                        </>
                        :
                        <LoginButton
                        createUsers={this.createUsers}
                        />
                }
                <SearchForm
                    getMovieName={this.getMovieName}
                    MovieSearchByName={this.MovieSearchByName}
                />
                <Footer />

            </div>
        )
    }
}

export default withAuth0(Home);
