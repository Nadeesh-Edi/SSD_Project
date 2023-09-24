import React from 'react'
import { Carousel } from 'react-bootstrap';
import About1 from '../assets/images/about1.jpg'
import About2 from '../assets/images/about2.jpg'
import About3 from '../assets/images/about3.jpg'
import About4 from '../assets/images/about4.jpg'
import About5 from '../assets/images/about5.jpg'
import About6 from '../assets/images/about6.jpg'
import About7 from '../assets/images/about7.jpg'

const AboutCarousel = () => {
      return (
            <Carousel fade={true} pause={false}>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={About1}
                              alt="First slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={About2}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={About3}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={About3}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={About4}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={About5}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={About6}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={About7}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
      )
}

export default AboutCarousel
