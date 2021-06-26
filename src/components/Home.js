import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import SearchForm from './SearchForm'
import '../home.css'


const serverUrl = process.env.REACT_APP_SERVER_URL

export class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            movieName:'',
            poster:false,
            movieDataArr:[]
        }
    }

    componentDidMount = async () => {
        await axios.get(`${serverUrl}/moviesPopular`).then(response => {
            this.setState({
                mostPopularMoviesData: response.data,
                movieDataArr: response.data
            })
        }).catch(error => alert(error))
        await axios.get(`${serverUrl}/moviesRated`).then(response => {
            this.setState({
                topRatedMoviesData: response.data,
                movieDataArr: response.data
            })
        }).catch(error => alert(error))
        await axios.get(`${serverUrl}/moviesUpcoming`).then(response => {
            this.setState({
                upComingMoviesData: response.data,
                movieDataArr: response.data
            })
        }).catch(error => alert(error))
    }

    getMovieName = (e) => { 
        this.setState({
            movieName: e.target.value,
        })
    }

    MovieSearchByName = async(e) => {
        e.preventDefault();
       await axios.get(`${serverUrl}/movies?movie=${this.state.movieName}`).then(response => {
            this.setState({
                searchMovie: response.data,
                movieDataArr: response.data
            })
            console.log('most',this.state.searchMovie);
            console.log('DataArr',this.state.movieDataArr);
        }).catch(error => alert(error))

    }

    
    
        render() {
            return (
                <div>
                    
                    <Header />
                    {this.state.movieDataArr.map(item=>{
                        if(item===this.state.movieName){
                            this.setState({
                                poster:true
                            }
                            )}
                            return item;
                    })}
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
