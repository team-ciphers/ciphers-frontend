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

            <h3 className="webLogo">Potato Movies</h3>
            {/* <ul className="list-unstyled">
                <li>+962789875799</li>
                <li>Al-Zarqaa</li>
                <li>Aamman</li>
              </ul> */}

            {/* coloum2 */}
            {/* <div className="col">
              <h4>Our Team</h4>
              <ul className="list-unstyled">
                <li>Anas</li>
                <li>Majd</li>
                <li>Safi</li>
              </ul>
            </div> */}
            {/* coloum3 */}

            <h4 className="FollowUs">Follow Us</h4>
            <div className="icons">
              <p><FaFacebook /> Facebook</p>
              <p><FaInstagram /> Instegram</p>
              <p className="GitHub"><FaGithub /> GitHub</p>
              <p className="Twitter"><FaTwitter /> Twitter</p>
            </div>
        
            <p className="ContactUs">Contact Us:</p>
            <br />

        
            <div className="info">
              <p className="ContactUs1">Info@Ciphers.com</p>
              <p className="ContactUs1"> +962 789875799</p>
              <p className="ContactUs1"> +966 725864589</p>
            </div>


            <div className="copyRigt" >
              &copy;copyright 2021
              Create with ❤️ by Ciphers Team
            </div>

            <div className="row">
              <h5> Cipher INC | All right reserved
              </h5>
              <h5 >  Terms Of Services | Privacy </h5>

            </div>



          </div>
        </div>

      </div>

    )
  }
}

export default Footer;


