import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import Red from "./assests/red3.jpg"
import Red2 from "./assests/red2.jpg"
import "./Curosel.css"


export class Curosel extends Component {
  render() {
    return (
      <div>
        <Carousel style={{ height: "950px" }}>
          <Carousel.Item interval={1000}>
            <img
              style={{ height: "950px", objectFit: "cover" }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="First slide"
            />
            <Carousel.Caption className="my-curosel">
              <h3>WATCH TRAILER</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={20}>
            <img
              style={{ height: "950px", objectFit: "cover" }}
              className="d-block w-100"
              src={Red}
              alt="Second slide"
            />
            <Carousel.Caption className="my-curosel">
              <h3>ADD TO WATCH LIST AND FAVARAITE LIST</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "950px", objectFit: "cover" }}
              className="d-block w-100"
              src={Red2}
              alt="Third slide"
            />
            <Carousel.Caption className="my-curosel">
              <h3>ADD REVEIW</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Curosel
