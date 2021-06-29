import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="main-footer">
        <div className='divMain'>
          <div >
            <h3 className="webLogo">Potato Movies</h3>
            <div className='followDiv'>
            <div className="icons">
            <h4 className="FollowUs">Follow Us</h4>
              <p><FaFacebook /> Facebook</p>
              <p><FaInstagram /> Instegram</p>
              <p className="GitHub"><FaGithub /> GitHub</p>
              <p className="Twitter"><FaTwitter /> Twitter</p>
            </div>
            </div>
            <div className="divContact">
            <p className="ContactUs">Contact Us:</p>
            <div className="info">
              <p className="ContactUs1">Info@Ciphers.com</p>
              <p className="ContactUs1"> +962 789875799</p>
              <p className="ContactUs1"> +966 725864589</p>
            </div>
            </div>
            <div className='divCopy'>
            <div className="copyRigt" >
              &copy;copyright 2021
              Create with ❤️ by Ciphers Team
            </div>
            <div>
              <h5> Cipher INC | All right reserved
              </h5>
              <h5 >  Terms Of Services | Privacy </h5>
            </div>
            </div>
            
          </div>
        </div>

      </div>

    )
  }
}

export default Footer;

