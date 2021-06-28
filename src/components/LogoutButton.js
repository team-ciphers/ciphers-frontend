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


const LogoutButton = () => {
  const checkButtonStyle = STYLES[0]
  const checkButtonSize = SIZES[0]
  const { logout } = useAuth0();

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
