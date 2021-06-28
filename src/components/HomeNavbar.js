import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './HomeNavbar.css'
// import PopularMovies from './PopularMovies'
// import Route from 'react-bootstrap/Route'


export class HomeNavbar extends Component {


    render() {
        return (
            <div className="homeNavbar">
                <>
                    <Navbar>
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link onClick={this.props.getPopularMovie} >Popular Movies</Nav.Link>
                                <Nav.Link onClick={this.props.getUpComingMovie} >Up Coming</Nav.Link>
                                <Nav.Link onClick={this.props.getRatedMovie} >Top Rated Movies</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <br />

                </>
            </div>
        )
    }
}

export default HomeNavbar
