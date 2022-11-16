import React from 'react';
import footer from '../../../assets/images/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="footer text-zinc-800 lg:py-24 px-24" style={{ backgroundImage: `url(${footer})` }}>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div className='lg:mx-80 lg:px-9'>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
        <div className="footer footer-center py-11 text-base-content">
        <div>
            <p>Copyright 2022 All Rights Reserved</p>
        </div>
    </div>
        </>
    );
};

export default Footer;