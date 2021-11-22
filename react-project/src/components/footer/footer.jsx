import React from 'react';
import './_footer.scss';

function Footer() {
    return (
<div className="footer-container">
    <a href="#" className="footer-logo-area">
        <img className="footer-logo" src="https://sstk.biz/images/studystacklogo.svg" alt="logo"></img>
    </a>
    <div className="footer-nav-area">
        <a href="#" className="footer-nav-item">Home</a>
        <a href="#" className="footer-nav-item">Flashcards</a>
        <a href="#" className="footer-nav-item">About</a>
        <a href="#" className="footer-nav-item">FAQ</a>
        <a href="#" className="footer-nav-item">Terms of service</a>
        <a href="#" className="footer-nav-item">Privacy statement</a>
        <a href="#" className="footer-nav-item">Contacts</a>
    </div>
</div>
    )
}

export default Footer