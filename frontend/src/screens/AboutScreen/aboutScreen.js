import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutCarousel from '../../components/AboutCarousel/aboutCarousel'
import max2 from '../AboutScreen/max.jpg'
import max3 from '../AboutScreen/x2.jpg'
import max4 from '../AboutScreen/max4.jpg'
import max8 from '../AboutScreen/max8.jpg'
import max10 from '../AboutScreen/max10.jpg'
import max11 from '../AboutScreen/max11.jpg'
import '../AboutScreen/about.css'
import SilderCarousel from '../../components/SliderCarousel/sliderCarousel'


const AboutScreen = () => {
      return (
            <>
                  <AboutCarousel />
                  <Container >
                        <Row>
                              <Col md={6} style={{ marginLeft: '50px' }}>
                                    <h1>ABOUT </h1>
                                    <h6>A personal tropical sanctuary that is perfect for escaping the city, Shangri-La Colombo overlooks the Indian Ocean in the heart of the business district with direct access to the most extensive international shopping mall in Sri Lanka, Shangri-La’s own One Galle Face Mall. The hotel offers the finest accommodation in Colombo, an exciting new dining and social scene and the largest and extensive hotel conference and event facilities.</h6>
                                    <ul>
                                          <br></br>
                                          <li><h6>541 rooms and suites</h6></li>
                                          <br></br>
                                          <li><h6>Unrivalled shopping experience in Sri Lanka’s leading shopping mall </h6></li>
                                          <br></br>
                                          <li><h6>Shangri-La Cares: Our commitment to your well-being in our care</h6></li>
                                    </ul>
                                    <br></br>
                                    <button className='btn btn-outline-warning'>Learn More</button>

                              </Col>

                              <Col md={5}>
                                    <img src={max2} style={{ width: "75%", height: "100%", marginLeft: '150px' }} />
                              </Col>
                        </Row>

                        <hr></hr>
                        <Row>
                              <center><h1>Recommended room types</h1>
                                    <p>Offering striking views of the Indian Ocean, Beira Lake and the city beyond, our 500 guest rooms and suites, and 41 serviced apartments are tastefully furnished to complement the urban-oceanside location and are among the largest in Colombo.</p>
                              </center>
                              <SilderCarousel />

                        </Row>
                        <hr></hr>

                        <Row>
                              <center>
                                    <h1 align-items='center'>Discover Your Shangri-La Experiences​</h1>
                                    <p>Plan an ideal staycation complete with complimentary, breakfast, spa or dining credits or even all-day access to Adventure Zone for the kids. We have everyone in the family's well-being in mind.​</p>
                              </center>

                              <Col>

                                    <img src={max3} style={{ width: "100%", height: "100%" }} />
                              </Col>
                              <Col className='ml' md={6}>
                                    <h1>Savour Shangri-La</h1>
                                    <p>Recreate special Shangri-La dining experiences from the comfort of your About. Enjoy our collection of signature dishes delivered straight to your doorstep.</p>
                                    <br></br>
                                    <button className='btn btn-outline-warning'>Learn More</button>
                              </Col>
                        </Row>
                        <hr></hr>
                        <Row >

                              <Col className='ml' md={6}>
                                    <h1>Savour Shangri-La</h1>
                                    <p>Recreate special Shangri-La dining experiences from the comfort of your About. Enjoy our collection of signature dishes delivered straight to your doorstep.</p>
                                    <br></br>
                                    <button className='btn btn-outline-warning'>Learn More</button>

                              </Col>
                              <Col >
                                    <img src={max4} style={{ width: "100%", height: "94%" }} />
                              </Col>
                        </Row>
                        <br></br>
                        <hr></hr>

                        <Row className='ki'>
                              <center><h1>Offers</h1></center>

                              <Col className='bs'>
                                    <img src={max11} style={{ width: "100%", height: "50%" }} />
                                    <br></br><br></br>
                                    <h1>Rooms & Suites</h1>
                                    <p>  01 Feb 2022 - 31 Dec 2022
                                          Book Early and Save with Flexibility
                                          Book in advance and save up to 20% with complimentary date changes.</p>

                                    <br></br>
                                    <button className='btn btn-outline-warning'>Learn More</button>

                              </Col>

                              <Col className='bs'>
                                    <img src={max8} style={{ width: "100%", height: "50%" }} />
                                    <br></br><br></br>
                                    <h1>Rooms & Suites</h1>
                                    <p>Awurudu Celebrations
                                          Stay a little longer, see a little more!
                                          From LKR 31,932.80 Average Per Night
                                          View Details</p>
                                    <br></br>
                                    <button className='btn btn-outline-warning'>Learn More</button>

                              </Col>

                              <Col className='bs'>
                                    <img src={max10} style={{ width: "100%", height: "50%" }} />
                                    <br></br><br></br>
                                    <h1>Rooms & Suites</h1>
                                    <h4>Bed & Breakfast</h4>
                                    <p>Start your day with stunning views of Colombo and daily breakfast.</p>
                                    <br></br>
                                    <button className='btn btn-outline-warning'>Learn More</button>
                              </Col>
                        </Row>

                        <hr></hr>


                  </Container>

            </>

      )
}

export default AboutScreen
