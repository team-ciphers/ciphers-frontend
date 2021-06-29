import React, { Component } from 'react'
import Footer from './Footer'
import axios from 'axios'
import SearchForm from './SearchForm'
import '../home.css'
import MovieCard from './MovieCard';
import Navbar from './Navbar'
import Profile from './Profile'
import { withAuth0 } from "@auth0/auth0-react";

import HomeNavbar from './HomeNavbar'
import Curosel from "./Curosel"
import './Home.css'

const serverUrl = process.env.REACT_APP_SERVER_URL

export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movieName: '',
            poster: false,
            searchMovie: [],
            mostPopularMoviesData: [],
            // email: this.props.auth0.user.email,


        }
    }


    componentDidMount = async () => {
        await axios.get(`${serverUrl}/moviesPopular`).then(response => {
            this.setState({
                searchMovie: response.data,
            })
            console.log('email', this.state.email)
        }).catch(error => console.log(error))
    }

    getUpComingMovie = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/moviesUpcoming`).then(response => {
            this.setState({
                searchMovie: response.data,
            })
            console.log('UP', this.state.searchMovie);

        }).catch(error => console.log(error))
    }

    getMovieName = (e) => {
        this.setState({
            movieName: e.target.value,
        })
    }

    getPopularMovie = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/moviesPopular`).then(response => {
            this.setState({
                searchMovie: response.data,
            })
            console.log('most', this.state.searchMovie);

        }).catch(error => console.log(error))
    }


    getRatedMovie = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/moviesRated`).then(response => {
            this.setState({
                searchMovie: response.data,
            })
            console.log('Rated', this.state.searchMovie);
        }).catch(error => console.log(error))

    }

    MovieSearchByName = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/movies?movie=${this.state.movieName}`).then(response => {
            this.setState({
                searchMovie: response.data,
            })
            console.log('most', response.data);
        }).catch(error => console.log(error))
    }

    render() {


        return (


            <div className="homePage">
                <Curosel />
                <Navbar />
                <HomeNavbar
                    componentDidMount={this.componentDidMount}
                    getPopularMovie={this.getPopularMovie}
                    getRatedMovie={this.getRatedMovie}
                    getUpComingMovie={this.getUpComingMovie}
                />
                <br />
                <SearchForm
                    getMovieName={this.getMovieName}
                    MovieSearchByName={this.MovieSearchByName}
                />

                < MovieCard
                    searchMovie={this.state.searchMovie}

                />


                <Footer />

            </div>
        )
    }
}

export default withAuth0(Home);
