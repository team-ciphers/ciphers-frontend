import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="main-footer">
          <div className="container2">
            <div className="row">
              <div className="col">
                <h4>Potato Inc.</h4>
                <ul className="list-unstyled">
                  <li>www.cipher.com</li>
                  <li>Cipher@Info.com</li>
                  <li>+962789875799</li>
                  <li>+962505558</li>
                </ul>
              </div>
              <div className="col">
                {/* <h4>Our Team</h4>
                <ul className="list-unstyled">
                  <li>Mr.Anas Al-Ramahi</li>
                  <li>Mr.Baraa Al-Osaily</li>
                  <li>Mr.Majd Al-Khasawneh</li>
                  <li>Mr.Mohammad Al-Safi</li>
                  <li>Ms.Reem Bani Ali</li>
                  <li>Ms.Salam Mustafa</li>
                  <li>Ms.Ruba Kanan</li>
                </ul> */}
              </div>
              <div className="col">
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                  <li><FaFacebook /> Facebook</li>
                  <li><FaTwitter /> Twitter</li>
                  <li><FaInstagram></FaInstagram> Instegram</li>
                  <li><FaGithub /> Github</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row-term">&copy; {new Date().getFullYear} Cipher INC.| All right reserved | Terms OF Service | Privacy </div>


        </div>
      </div>



    )
  }
}

export default Footer;

