import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import './ModalMovie.css'
import { withAuth0 } from "@auth0/auth0-react";
import OverViewTab from "./OverViewTab";
import Reviews from "./Reviews";
import Nav from 'react-bootstrap/Nav'
export class ModalMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewsList: [],
        }
    }
    addFavorite = (e) => {
        e.preventDefault();
        let flag1 = true;
        let flag2 = true;
        const reqBody = {
            email: this.props.auth0.user.email,
            Movie: {
                original_title: this.props.original_title,
                poster_path: this.props.poster_path,
                vote_average: this.props.vote_average,
                overview: this.props.overview,
                release_date: this.props.release_date,
                id: this.props.movieId,
            }
        }
        axios.get(`${process.env.REACT_APP_SERVER_URL}/users?email=${this.props.auth0.user.email}`).then(res => {
            for (let i = 0; i < res.data[0].to_watch.length; i++) {
                if (res.data[0].to_watch[i].id === this.props.movieId) {
                    flag2 = false;
                    break;
                }
            }
        })
        axios.get(`${process.env.REACT_APP_SERVER_URL}/users?email=${this.props.auth0.user.email}`).then(res => {
            for (let i = 0; i < res.data[0].favMovie.length; i++) {
                if (res.data[0].favMovie[i].id === this.props.movieId) {
                    flag1 = false;
                    break;
                }
            }
            if (flag1 && flag2) {
                axios.post(`${process.env.REACT_APP_SERVER_URL}/usersFav`, reqBody)
            }
        })
        this.props.buttonHideFlagHandle(true);
    }
    addToWatch = (e) => {
        e.preventDefault();
        let flag1 = true;
        let flag2 = true;
        const reqBody = {
            email: this.props.auth0.user.email,
            Movie: {
                original_title: this.props.original_title,
                poster_path: this.props.poster_path,
                vote_average: this.props.vote_average,
                overview: this.props.overview,
                release_date: this.props.release_date,
                id: this.props.movieId,
            }
        }
        axios.get(`${process.env.REACT_APP_SERVER_URL}/users?email=${this.props.auth0.user.email}`).then(res => {
            for (let i = 0; i < res.data[0].favMovie.length; i++) {
                if (res.data[0].favMovie[i].id === this.props.movieId) {
                    flag2 = false;
                    console.log("Movie already in Favorite list");
                    break;
                }
            }
        })
        axios.get(`${process.env.REACT_APP_SERVER_URL}/users?email=${this.props.auth0.user.email}`).then(res => {
            for (let i = 0; i < res.data[0].to_watch.length; i++) {
                if (res.data[0].to_watch[i].id === this.props.movieId) {
                    flag1 = false;
                    break;
                }
            }
            if (flag1 && flag2) {
                axios.post(`${process.env.REACT_APP_SERVER_URL}/usersWatch`, reqBody)
            }
        })
        this.props.buttonHideFlagHandle(true);
    }
    createReview = async (e) => {
        e.preventDefault();
        const reqBody = {
            movieId: this.props.movieId,
            review: { email: this.props.auth0.user.email, text: e.target.review.value }
        }

        await axios.post(`${process.env.REACT_APP_SERVER_URL}/userReview`, reqBody).then(response => {
            this.setState({
                reviewsList: response.data[0].reviews
            })
        }).catch(error => console.log(error))
    }
    getReview = async (e) => {
        e.preventDefault();
        this.setState({
            reviewsList: []
        })
        this.props.tabFlagHandle(false);
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/userReview?movieId=${this.props.movieId}`).then(response => {
            this.setState({
                reviewsList: response.data[0].reviews,
            })
        }).catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <Modal style={{ margin: "0%" }} size={'lg'} show={this.props.show} onHide={this.props.handleClose} >
                    <iframe width="100%" height="500" src={this.props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen></iframe>
                    <Nav className='my-new-nav' defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link onClick={() => this.props.tabFlagHandle(true)}>Overview</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={(e) => this.getReview(e)}>Reviews</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Modal.Body className="Modal">
                        {this.props.tabFlag ?
                            <OverViewTab className="my-para"
                                original_title={this.props.original_title}
                                poster_path={this.props.poster_path}
                                vote_average={this.props.vote_average}
                                overview={this.props.overview}
                                release_date={this.props.release_date}
                                addToWatch={this.addToWatch}
                                addFavorite={this.addFavorite}
                                buttonHideFlag={this.props.buttonHideFlag}
                            />
                            :
                            <Reviews
                                reviewsList={this.state.reviewsList}
                                createReview={this.createReview}
                                getReview={this.getReview}
                            />}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default withAuth0(ModalMovie);