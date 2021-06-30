import axios from 'axios';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalMovie from './ModalMovie'
import './MovieCard.css'

export class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            original_title: '',
            poster_path: '',
            vote_average: '',
            overview: '',
            release_date: '',
            movieId: '',
            reviews: [],
            url: '',
            tabFlag: true
        }
    }
    tabFlagHandle = (boolean) => {
        this.setState({
            tabFlag: boolean
        })
    }
    handleClose = () => this.setState({ show: false });
    handleShow = async (original_title, overview, release_date, vote_average, poster_path, movieId) => {
        this.setState({
            tabFlag: true,
            movieId: ''
        })
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/userReviews?movieId=${movieId}`).then(response => {
            this.setState({
                reviews: response.data,
                show: !this.state.show,
                original_title: original_title,
                poster_path: poster_path,
                vote_average: vote_average,
                overview: overview,
                release_date: release_date,
                movieId: movieId
            })
        }).catch(error => {
            this.setState({
                show: !this.state.show,
                original_title: original_title,
                poster_path: poster_path,
                vote_average: vote_average,
                overview: overview,
                release_date: release_date,
                movieId: movieId
            })
        });
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/movieTrailer?movieId=${movieId}`).then(response => {
            console.log('cvbnm,', response.data);
            console.log(response.data)
            this.setState({
                url: response.data,
            })
        }).catch(error => console.log(error))
    };
    render() {
        return (
            <div style={{ margin: '20px 10% 20px 10%' }}>
                <ModalMovie
                    handleClose={this.handleClose}
                    show={this.state.show}
                    original_title={this.state.original_title}
                    poster_path={this.state.poster_path}
                    vote_average={this.state.vote_average}
                    overview={this.state.overview}
                    release_date={this.state.release_date}
                    reviews={this.state.reviews}
                    movieId={this.state.movieId}
                    url={this.state.url}
                    tabFlagHandle={this.tabFlagHandle}
                    tabFlag={this.state.tabFlag}/>
                <Row xs={1} md={4} className="g-4">
                    {this.props.searchMovie.map(item => {
                        return (<Col>
                            <Card className="my-card" onClick={() => this.handleShow(item.original_title, item.overview, item.release_date, item.vote_average, item.poster_path, item.movieId)}>
                                <Card.Body style={{ padding: "0px" }}>
                                    <Card.Img
                                        className="my-img" variant="top" src={item.poster_path} />
                                </Card.Body>
                                <Card.Title className="my-title">{item.original_title}</Card.Title>
                            </Card>
                        </Col>
                        )
                    })}
                </Row>
            </div >
        )
    }
}

export default MovieCard
