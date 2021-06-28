import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
// import {
//     Button,
//     UncontrolledCollapse,
//     DropdownMenu,
//     DropdownItem,
//     DropdownToggle,
//     UncontrolledDropdown,
//     Media,
//     NavbarBrand,
//     NavItem,
//     NavLink,
//     Row,
//     Col,
//     UncontrolledTooltip
// } from "reactstrap";

export class ProfileNavBar extends Component {
    render() {
        return (
            <div className="profileNavbar">
                <>
                    <Navbar>
                        {/* <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Menu</span>
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem to="/Portfolio" >
                      Portfolio
                      </DropdownItem>

                      <DropdownItem to="/" >
                      Profile page
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link onClick={this.props.getToWatchList} >To Watch List</Nav.Link>
                                <Nav.Link onClick={this.props.getFavMovies} >Favorite Movies</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <br />
                </>
            </div>
        )
    }
}

export default ProfileNavBar
