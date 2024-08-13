import React from 'react';
import "../styles/footer-panel.css"

const FooterPanel = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Image Eye Care is committed to providing the best eye care services with top-notch professionals.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/products">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Services</a></li>
                        <li><a href="/contact">Team</a></li>
                        <li><a href="/contact">Feedback</a></li>
                        <li><a href="/contact">Info Centre</a></li>
                        <li><a href="/contact">Blogs</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>1234 Eye Care Blvd, Suite 100<br/>City, State, ZIP</p>
                    <p>Email: info@imageeyecare.com<br/>Phone: (123) 456-7890</p>
                </div>
            </div>          
        </footer>
    )
}

export default FooterPanel;
