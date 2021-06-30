import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LogButton.css';


const STYLES = [
  "btn--primary",
  "btn--cutline"
]

const SIZES = [
  "btn--menu",
  "btn--large",


]

const LoginButton = () => {
  const checkButtonStyle = STYLES[0]
  const checkButtonSize = SIZES[0]
  const { loginWithRedirect } = useAuth0();

  return <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
