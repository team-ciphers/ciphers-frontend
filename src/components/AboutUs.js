import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Navbar from './Navbar'
import Footer from './Footer'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import CardColumns from 'react-bootstrap/CardColumns'

import './AboutUs.css'


export class AboutUs extends Component {
    render() {
        return (
            <div class="container mx-auto mt-4">
                <Navbar />
                <CardGroup>
                    <CardColumns CardColumns style={{ display: "flex", flexWrap: "wrap" }} className="col">

                        <Card>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/74907404?v=4" alt="Anas" />
                            <Card.Body>
                                <Card.Title>Anas Al-Ramahi</Card.Title>
                                <Card.Text>
                                    <a href=" https://github.com/AnasAlRamahi" >< FaGithub></FaGithub></a>
                                    <a href="https://www.linkedin.com/in/anas-al-ramahi " > < FaLinkedin></FaLinkedin></a>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Full Stack Developer</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/79628466?v=4" alt="Salam" />
                            <Card.Body>
                                <Card.Title>Salam Mustafa</Card.Title>
                                <Card.Text>
                                    <a href="https://github.com/salammustafa728" >< FaGithub></FaGithub></a>
                                    <a href="https://www.linkedin.com/in/salam-mustafa" > < FaLinkedin></FaLinkedin></a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Full Stack Developer</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81703331?v=4" alt="Reem" />
                            <Card.Body>
                                <Card.Title>Reem Bani Ali</Card.Title>
                                <Card.Text>
                                    <a href="https://github.com/rymbaniali" >< FaGithub></FaGithub></a>
                                    <a href="https://www.linkedin.com/in/reem-ayasrah-92a92ab5/" > < FaLinkedin></FaLinkedin></a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Full Stack Developer</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81149062?v=4" alt="Saify" />
                            <Card.Body>
                                <Card.Title>Mohammed Alsaify</Card.Title>
                                <Card.Text>
                                    <a href="https://github.com/saify96" >< FaGithub></FaGithub></a>
                                    <a href=" https://www.linkedin.com/in/mohammadalsaify/" > < FaLinkedin></FaLinkedin></a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Full Stack Developer</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81148879?v=4" alt="Majd" />
                            <Card.Body>
                                <Card.Title>Majd Khasawneh</Card.Title>
                                <Card.Text>

                                    <a href="https://github.com/majdkh97" >< FaGithub></FaGithub></a>
                                    <a href="https://www.linkedin.com/in/majd-motaz-687695192/" > < FaLinkedin></FaLinkedin></a>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Full Stack Developer</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81565860?v=4" alt="Ruba" />
                            <Card.Body>
                                <Card.Title>Ruba Kanaan</Card.Title>
                                <Card.Text>
                                    <a href="https://github.com/rubakanaan" >< FaGithub></FaGithub></a>
                                    <a href="https://www.linkedin.com/in/ruba-kanaan" > < FaLinkedin></FaLinkedin></a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Full Stack Developer</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81553898?v=4" alt="Baraa" />
                            <Card.Body>
                                <Card.Title>Baraa Alosaily</Card.Title>
                                <Card.Text>

                                    <a href="https://github.com/baraaAlosaily" >< FaGithub></FaGithub></a>
                                    <a href="https://www.linkedin.com/in/baraa-al-osaily-732513147" > < FaLinkedin></FaLinkedin></a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Full Stack Developer</small>
                            </Card.Footer>
                        </Card>
                    </CardColumns>
                </CardGroup>

                <Footer />
            </div>
        )
    }
}

export default AboutUs

