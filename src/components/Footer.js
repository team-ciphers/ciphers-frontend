import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
// import { AiFillTwitterCircle } from "react-icons/Ai"
// import { GrInstagram } from "react-icons/fa"

import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* coloum1 */}
            <div className="col">
              <h4>Cipher</h4>
              <ul className="list-unstyled">
                <li>+962789875799</li>
                <li>Al-Zarqaa</li>
                <li>Aamman</li>
              </ul>
            </div>
            {/* coloum2 */}
            <div className="col">
              <h4>Our Team</h4>
              <ul className="list-unstyled">
                <li>Anas</li>
                <li>Majd</li>
                <li>Safi</li>
              </ul>
            </div>
            {/* coloum3 */}
            <div className="col">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li><FaFacebook /> Facebook</li>
                <li><FaInstagram /> Instegram</li>
                <li><FaGithub /> GitHub</li>
                <li><FaTwitter /> Twitter</li>
              </ul>
            </div>
            <div className="row">
              <p className="col-sm">
                &Copy;{new Date().getFullYear()} Cipher INC | All right reserved | Terms Of Services | Privacy
              </p>

            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default Footer;
