import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import SearchForm from './SearchForm'
import '../home.css'
import MovieCard from './MovieCard';
import Navbar from './Navbar'


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
        return (
            <div>
                {/* <Header /> */}
                <Navbar/>

                {this.state.searchMovie.map(() => {
                    return <MovieCard />;
                })}

                <SearchForm
                    getMovieName={this.getMovieName}
                    MovieSearchByName={this.MovieSearchByName}
                />
                <Footer />

            </div>
        )
    }
}

export default (Home);
