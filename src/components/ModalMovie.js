import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import './ModalMovie.css'
import { withAuth0 } from "@auth0/auth0-react";

export class ModalMovie extends Component {

    
    addFavorite = (e) => {
        e.preventDefault();
        let flag1=true;
        let flag2=true;
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

        axios.get(`${process.env.REACT_APP_SERVER_URL}/users?email=${this.props.auth0.user.email}`).then(res=>{
            for(let i = 0 ;i<res.data[0].to_watch.length;i++ ){
                if(res.data[0].to_watch[i].id===this.props.movieId){
                    flag2=false;
                    console.log("Movie already in to watch list");
                    break;
                }   
            }
        })

        axios.get(`${process.env.REACT_APP_SERVER_URL}/users?email=${this.props.auth0.user.email}`).then(res=>{
            for(let i = 0 ;i<res.data[0].favMovie.length;i++ ){
                if(res.data[0].favMovie[i].id===this.props.movieId){
                    flag1=false;
                    console.log("Movie already in favorite list");
                    break;
                }   
            }
            if(flag1&&flag2){
                axios.post(`${process.env.REACT_APP_SERVER_URL}/usersFav`, reqBody)
                console.log("Added to Favorite list");
            }
        })     
    }
    
    addToWatch = (e) => {
        e.preventDefault();
        let flag1=true;
        let flag2=true;
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

        axios.get(`${process.env.REACT_APP_SERVER_URL}/users?email=${this.props.auth0.user.email}`).then(res=>{
            for(let i = 0 ;i<res.data[0].favMovie.length;i++ ){
                if(res.data[0].favMovie[i].id===this.props.movieId){
                    flag2=false;
                    console.log("Movie already in Favorite list");
                    break;
                }   
            }
        })


        axios.get(`${process.env.REACT_APP_SERVER_URL}/users?email=${this.props.auth0.user.email}`).then(res=>{
            for(let i = 0 ;i<res.data[0].to_watch.length;i++ ){
                if(res.data[0].to_watch[i].id===this.props.movieId){
                    flag1=false;
                    console.log("Movie already in to-Watch list");
                    break;
                }   
            }
            if(flag1&&flag2){
                axios.post(`${process.env.REACT_APP_SERVER_URL}/usersWatch`, reqBody)
                console.log("Added to to-Watch list");
            }
        })     
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