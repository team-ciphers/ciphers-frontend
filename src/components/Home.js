import React, { Component } from 'react'
import Footer from './Footer'
import axios from 'axios'
import SearchForm from './SearchForm'
import '../home.css'
import MovieCard from './MovieCard';
import Navbar from './Navbar'
import HomeNavbar from './HomeNavbar'
import UpComingMovies from './UpComingMovies'

const serverUrl = process.env.REACT_APP_SERVER_URL

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieName: '',
            poster: false,
            searchMovie: [],
            UpComingMoviesData: [],

        }
    }

    getUpComingMovie = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/moviesUpcoming`).then(response => {
            this.setState({
                searchMovie: response.data,
                UpComingMoviesData: response.data,
            })
            console.log('UP', this.state.searchMovie);
            console.log('UP1111111', this.state.UpComingMoviesData);

        }).catch(error => alert(error))
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

        }).catch(error => alert(error))
    }


    getRatedMovie = async (e) => {
        e.preventDefault();
        await axios.get(`${serverUrl}/moviesRated`).then(response => {
            this.setState({
                searchMovie: response.data,
            })
            console.log('Rated', this.state.searchMovie);
        }).catch(error => alert(error))

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


        return (


            <div>
                <Navbar />

                <HomeNavbar
                    componentDidMount={this.componentDidMount}
                    getPopularMovie={this.getPopularMovie}
                    getRatedMovie={this.getRatedMovie}
                    getUpComingMovie={this.getUpComingMovie}
                />


                <SearchForm
                    getMovieName={this.getMovieName}
                    MovieSearchByName={this.MovieSearchByName}
                />


                < MovieCard
                    searchMovie={this.state.searchMovie}
                />
                <UpComingMovies
                    UpComingMoviesData={this.state.UpComingMoviesData}
                    getUpComingMovie={this.getUpComingMovie}


                />

                <Footer />

            </div>
        )
    }
}


export default (Home);
