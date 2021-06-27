import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import SearchForm from './SearchForm'


const serverUrl = process.env.REACT_APP_SERVER_URL

export class Home extends Component {

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

    MovieSearchByName = () => {
        axios.get(`${serverUrl}/movies?movie=${this.state.movieName}`).then(response => {
            this.setState({
                mostPopularMoviesData: response.data,
            })
        }).catch(error => alert(error))

    }
    
        render() {
            return (
                <div>
                    <Header />
                    <SearchForm
                    getMovieName ={this.getMovieName}
                    MovieSearchByName ={this.MovieSearchByName}
                    />
                    <Footer />
                </div>
            )
        }
    }

    export default(Home);
