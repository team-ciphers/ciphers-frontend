import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Aboutus from './components/Aboutus';

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    {/* <App /> */}
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/Profile" exact render={props => <Profile {...props} />} />
        <Route path="/Aboutus" exact render={props => <Aboutus {...props} />} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);


