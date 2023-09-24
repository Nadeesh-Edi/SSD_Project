import React from 'react'
import './footer.css'


const Footer = () => {
    return(
        <>
        <footer>
        <div className= "container">
            <div className= "sec aboutus">
            <br/>
                <h4>About Us</h4>
                <p>A personal tropical sanctuary that is perfect for escaping the city, Kings Hotel overlooks the Indian Ocean in the heart of the business district. The hotel offers the finest accommodation in Colombo, an exciting new dining and social scene and the largest and extensive hotel conference and event facilities.</p>
                
                <ul className="sci">
                <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
            </ul>
            
            </div>
            
           <div className= "sec contact">
           <br/>
           <h4>Contact Us</h4>
           <ul className="info"> 
                <li>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <span>No:34, Galle Road, Galleface</span>
                </li>
                <li>
                    <span><i class="fas fa-phone-alt"></i></span>
                    <span>011 2241915</span>
                </li>
                <li>
                    <span><i class="fas fa-envelope"></i></span>
                    <span>carltonhotelsl@gmail.com</span>
                </li>
           </ul>
               </div>
        </div>
        </footer>
        </>
    )
}

export default Footer