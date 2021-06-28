import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Navbar from './Navbar'
import Footer from './Footer'

export class AboutUs extends Component {
    render() {
        return (
            <div>
                     <Navbar />
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/74907404?v=4" alt="Anas" />
                        <Card.Body>
                            <Card.Title>Anas Al-Ramahi</Card.Title>
                            <Card.Text>
                                GitHub:https://github.com/AnasAlRamahi
                       
                                Linkdin:
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Full Stack Developer</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/79628466?v=4"  alt="Salam"/>
                        <Card.Body>
                            <Card.Title>Salam Mustafa</Card.Title>
                            <Card.Text>
                                GitHub:https://github.com/salammustafa728
                             
                                Linkdin:
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Full Stack Developer</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81703331?v=4"  alt="Reem"/>
                        <Card.Body>
                            <Card.Title>Reem Bani Ali</Card.Title>
                            <Card.Text>
                                GitHub:
                                Linkdin:
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Full Stack Developer</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81149062?v=4"  alt="Saify"/>
                        <Card.Body>
                            <Card.Title>Mohammed Alsaify</Card.Title>
                            <Card.Text>
                                GitHub:https://github.com/saify96

                                Linkdin:
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
                                GitHub:https://github.com/majdkh97

                                Linkdin:
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Full Stack Developer</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81565860?v=4"  alt="Ruba" />
                        <Card.Body>
                            <Card.Title>Ruba Kanaan</Card.Title>
                            <Card.Text>
                                GitHub:rubakanaan

                                Linkdin:
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
                                GitHub:https://github.com/baraaAlosaily
                                Linkdin:
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Full Stack Developer</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
           
                <Footer />
            </div>
        )
    }
}

export default AboutUs

