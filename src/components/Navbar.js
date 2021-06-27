import React, { Component } from 'react'
// import { Nav } from 'react-bootstrap';
import { menuItems } from './MenuItems';
import './Navbar.css'
import {Button} from "./Button"


class Navbar extends Component {

    state = { clicked: false }
    handleClick=()=>{
        this.setState=({ clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>
                    Ciphers
                </h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'} ></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
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
                <Button>Sign In</Button>
                <Button>Sign Up</Button>

            </nav>

        )
    }
}

export default Navbar
