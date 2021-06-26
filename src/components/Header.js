import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand>My Favorite Books</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link >Home</Nav.Link>
                            <Nav.Link>Profile</Nav.Link>
                            <Nav.Link>{
                                isAuthenticated ?
                                    <LogoutButton />
                                    :
                                    <LoginButton />
                            }</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}
export default withAuth0(Header);

