import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container py-5'>
                <div className='row mb-5'>
                    <div className='col-md-3 mb-4'>
                        <h5 className='footer-title'>Company</h5>
                        <ul className='footer-links'>
                            <li><a href='#about'>About Us</a></li>
                            <li><a href='#careers'>Careers</a></li>
                            <li><a href='#press'>Press & Media</a></li>
                            <li><a href='#blog'>Blog</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 mb-4'>
                        <h5 className='footer-title'>Account</h5>
                        <ul className='footer-links'>
                            <li><a href='#open'>Open Account</a></li>
                            <li><a href='#charges'>Charges</a></li>
                            <li><a href='#statements'>Statements</a></li>
                            <li><a href='#downloads'>Downloads</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 mb-4'>
                        <h5 className='footer-title'>Support</h5>
                        <ul className='footer-links'>
                            <li><a href='#contact'>Contact Us</a></li>
                            <li><a href='#support'>Support Portal</a></li>
                            <li><a href='#faq'>FAQ</a></li>
                            <li><a href='#community'>Community</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 mb-4'>
                        <h5 className='footer-title'>Follow Us</h5>
                        <div className='social-links'>
                            <a href='#facebook' className='social-icon'>f</a>
                            <a href='#twitter' className='social-icon'>𝕏</a>
                            <a href='#instagram' className='social-icon'>📷</a>
                            <a href='#linkedin' className='social-icon'>in</a>
                        </div>
                    </div>
                </div>
                <hr className='my-4'/>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='footer-text'>© 2024 TradeHub. All rights reserved.</p>
                        <p className='footer-disclaimer'>Investments are subject to market risks. Please read all relevant documents before investing.</p>
                    </div>
                    <div className='col-md-6 text-end'>
                        <ul className='footer-bottom-links'>
                            <li><a href='#terms'>Terms & Conditions</a></li>
                            <li><a href='#privacy'>Privacy Policy</a></li>
                            <li><a href='#disclosure'>Disclosure</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;