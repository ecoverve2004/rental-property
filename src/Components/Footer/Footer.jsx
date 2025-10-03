import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div id="Footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Private Property Rental</h3>
                    <p>Your trusted partner for renting private properties.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#help">Help Center</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p>Email: ecovervetechnology@gmail.com</p>
                    <p>Phone: +91 (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Private Property Rental. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
