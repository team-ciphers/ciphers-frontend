import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import './ModalMovie.css'
import { withAuth0 } from "@auth0/auth0-react";

export class ModalMovie extends Component {

    addFavorite = (e) => {
        e.preventDefault();
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
        axios.post(`${process.env.REACT_APP_SERVER_URL}/usersFav`, reqBody).then(res => {
            console.log(res.data);
        })
            .catch(error => error.mesaage);

    }

    addToWatch = (e) => {
        e.preventDefault();
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
        axios.post(`${process.env.REACT_APP_SERVER_URL}/usersWatch`, reqBody).then(res => {
            console.log(res.data);
        })
            .catch(error => error.mesaage);

    }


    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <div>

                <Modal size={'lg'} show={this.props.show} onHide={this.props.handleClose} >
                    <iframe width="100%" height="500" src={this.props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen></iframe>
                    <Modal.Body>
                        <Modal.Title>{this.props.original_title}</Modal.Title>
                        <p>{this.props.vote_average}  </p>
                        <p>{this.props.release_date}  </p>
                        <p>{this.props.overview}  </p>
                        {isAuthenticated &&

                            <div style={{ float: 'right' }}>

                                <Button onClick={(e) => this.addFavorite(e)} variant="secondary">Add To Favorite</Button>
                                <Button onClick={(e) => this.addToWatch(e)} variant="secondary">Add To Watch List</Button>
                            </div>
                        }



                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default withAuth0(ModalMovie);