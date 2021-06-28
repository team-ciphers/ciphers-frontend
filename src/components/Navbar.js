import React, { Component } from 'react'
// import { Nav } from 'react-bootstrap';
import { menuItems } from './MenuItems';
import './Navbar.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { withAuth0 } from "@auth0/auth0-react";
import Profile from './Profile'
import potato from "./assests/potato.png"

class Navbar extends Component {

    state = { clicked: false }
    handleClick = () => {
        this.setState = ({ clicked: !this.state.clicked })
    }

    render() {
        const { isAuthenticated } = this.props.auth0;

        return (
            <nav className='NavbarItems'>
                <img src={potato} style={{ width: "170px" }} />
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    }


                    )
                    }

                </ul>
                {
                    isAuthenticated ?
                        <>
                            <LogoutButton />
                            <Profile />
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
