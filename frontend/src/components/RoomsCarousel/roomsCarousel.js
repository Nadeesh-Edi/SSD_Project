import React from 'react'
import { Carousel } from 'react-bootstrap';

import Room1 from '../assets/images/room1.jpg'
import Room2 from '../assets/images/room2.jpg'
import Room3 from '../assets/images/room3.jpg'
import Room4 from '../assets/images/room4.jpg'
import Room5 from '../assets/images/room5.jpg'

const RoomsCarousel = () => {
      return (
            <Carousel fade={true} pause={false}>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Room1}
                              alt="First slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Royal</h3>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Room2}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>King</h3>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Room3}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Queens</h3>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Room4}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Quad</h3>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Room5}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Suite / Executive Suite</h3>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>


      )
}

export default RoomsCarousel
