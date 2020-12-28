import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>About Us</h4>
                       <p>
                       Royal Tag is Smart Formal Fashion Retail Brand for Men. Established in 2012 with the philosophy, “Quality products and consistent customer care could only achieve long lasting success in market”. Our continuing journey for striving to strengthen the relationship with our valued customer by providing contemporary products with the assurance of best quality in formal and casual wear as well.
                       </p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Need Help?</h4>
                        <ul className="list-unstyled">
                            <li><h5>Email: <span>info@royaltag.com.pk</span></h5></li>
                            <li><h5>Phone:</h5><span>+923333344</span></li>
                            <li><h5>Phone:</h5><span>+923444444</span></li>
                            <li><h5>Working Hours:</h5><span>12-5pm</span></li>

                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><Link>About us</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            <li>Home</li>
                            <li><Link>Sale</Link></li>

                        </ul>
                    </div>
                   

                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Royal Tag - All Rights Reserved
                    </p>

                </div>

            </div>
            </div>
        </div>

     );
}
 
export default Footer;
