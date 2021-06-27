import React, { Component } from 'react'
import Home from './components/Home'
import { withAuth0 } from "@auth0/auth0-react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


export class App extends Component {
  render() {
    // const { isAuthenticated } = this.props.auth0;
    return (
      <div>
        <Home 
        
        />
      </div>
    )
  }
}

export default withAuth0(App);
