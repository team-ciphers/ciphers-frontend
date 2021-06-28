import React, { Component } from 'react'
import { menuItems } from './MenuItems';
import './Navbar.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { withAuth0 } from "@auth0/auth0-react";
import Profile from './Profile'
<<<<<<< HEAD
import AboutUs from './AboutUs';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import './HomeNavbar.css'

=======
import { Link } from 'react-router-dom';
>>>>>>> 831543b9cc18a2cdbd2e99bd170170505880fd79


class Navbar extends Component {

    state = { clicked: false }
    handleClick = () => {
        this.setState = ({ clicked: !this.state.clicked })
    }

    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>
                    Ciphers
                </h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
                </div>
                {/* <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })
                    }
<<<<<<< HEAD


                    )
                    }

                </ul>

=======
                </ul> */}
                {
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <Link className='nav-links' to='/'>HOME</Link>
                        {isAuthenticated && <Link className='nav-links' to='/profile'>PROFILE</Link>}
                        <Link className='nav-links' to='/aboutus'>ABOUT US</Link>
                    </ul>
                }
>>>>>>> 831543b9cc18a2cdbd2e99bd170170505880fd79
                {
                    isAuthenticated ?
                        <>
                            <LogoutButton />
                        </>
                        :
                        <LoginButton
                            createUsers={this.createUsers}
                        />
                }
                
            </nav>

        )
    }
}

export default withAuth0(Navbar)
