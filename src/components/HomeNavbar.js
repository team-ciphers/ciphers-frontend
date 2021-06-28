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
            <div >

                <Navbar className="homeNavbar">
                    <Container>
                        <Nav style={{ color: "white" }} className="me-auto">
                            <Nav.Link className="me-auto-to" style={{ color: "white" }} onClick={this.props.getPopularMovie} >Popular Movies</Nav.Link>
                            <Nav.Link style={{ color: "white" }}> | </Nav.Link>
                            <Nav.Link className="me-auto-to" style={{ color: "white" }} onClick={this.props.getUpComingMovie} > Up Coming </ Nav.Link>
                            <Nav.Link style={{ color: "white" }}> | </Nav.Link>
                            <Nav.Link className="me-auto-to" style={{ color: "white" }} onClick={this.props.getRatedMovie} > Top Rated Movies</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <br />


            </div>
        )
    }
}

export default HomeNavbar
