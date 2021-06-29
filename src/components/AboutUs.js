import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import aboutus from './Aboutus.json'
import './AboutUs.css'


export class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aboutus: aboutus
        }
    }
    render() {
        return (
            <div >

                <Navbar />


                <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"center",marginBottom:'20px' }}>
                    {this.state.aboutus.map(((item) => {
                        return (
                            <CardGroup style={{margin:'10px'}}>
                                    <Card >
                                        <Card.Body  style={{ height:'320px',marginBottom:'10px' }} className="cardBoody">
                                            <Card.Img  style={{  height:'320px', margin:'0px',padding:'0px'}} className="cardImg" variant="top" src={item.imgUrl} alt={item.name} />
                                        </Card.Body>
                                        <Card.Title className="cardText">{item.name}</Card.Title>
                                        <Card.Text className="cardText">
                                           
                                            <a href={item.github} class="btn ">< FaGithub><i class="fab fa-github"></i></FaGithub> Github</a>
                                            <a href={item.linkedIn} class="btn ">< FaLinkedin><i class="fab fa-github"></i> </FaLinkedin> LinkedIn</a>
                                          
                                            <Card.Footer>
                                            <small className="text-muted cardText" style={{color:'#FF616D'}}>{item.title}</small>
                                        </Card.Footer>
                                        </Card.Text>
                                    </Card>
                            </CardGroup>
                        )
                    }))}

                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutUs


