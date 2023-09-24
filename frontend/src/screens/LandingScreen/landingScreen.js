import React from 'react'
import moment from "moment"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import '../LandingScreen/landing.css'

AOS.init({
      duration: '2000'
});

const LandingScreen = () => {
      return (
            <div className="">
                  <div className="landing row justify-content-center text-center bg-image">
                        <div className="col-md-9 my-auto" style={{ borderRight: '8px solid white' }}>
                              <h2 style={{ color: "white",fontSize: "130px" }} data-aos='zoom-in'>Carlton Hotel</h2>
                              <h1 style={{ color: "white" }} data-aos='zoom-out' >“We present to you the number one premier hotel in Sri Lanka.</h1>
                              <Link to="/rooms">
                                    <button button type="button" class="btn btn-success">Get Started</button>
                              </Link>
                        </div>



                  </div>

            </div>
      );
}

export default LandingScreen