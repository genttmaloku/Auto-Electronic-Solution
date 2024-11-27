import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importojmë Link nga react-scroll
import "./Navbar.css";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

const Navbar = () => {

    const [navToggle, setNavToggle] = useState(false);
    const navHandler = () => {
        setNavToggle(prevData => !prevData);
    }

    return (
        <nav className='navbar w-100 flex'>
            <div className='container w-100'>
                <div className='navbar-content flex fw-7'>
                    <div className='brand-and-toggler flex flex-between w-100'>
                        <Link to="/" className='navbar-brand fs-26'>AES</Link>
                        <div type="button" className={`hamburger-menu ${navToggle ? 'hamburger-menu-change' : ""}`} onClick={navHandler}>
                            <div className='bar-top'></div>
                            <div className='bar-middle'></div>
                            <div className='bar-bottom'></div>
                        </div>
                    </div>

                    <div className={`navbar-collapse ${navToggle ? 'show-navbar-collapse' : ""}`}>
                        <div className='navbar-collapse-content'>
                            <ul className='navbar-nav'>
                                {/* Përdorim Link nga react-scroll për scroll në vend të to="/path" */}
                                <li className='text-white'>
                                    <Link to="services" smooth={true} duration={500}>Shërbimet</Link>
                                </li>
                                <li className='text-white'>
                                    <Link to="about" smooth={true} duration={500}>Rreth Nesh</Link>
                                </li>
                                <li className='text-white'>
                                    <Link to="portfolio" smooth={true} duration={500}>Postimet e fundit</Link>
                                </li>
                                <li className='text-white'>
                                    <Link to="testimonials" smooth={true} duration={500}>Galeria</Link>
                                </li>
                                <li className='text-white'>
                                    <Link to="contact" smooth={true} duration={500}>Lokacioni</Link>
                                </li>
                            </ul>
                            <ul className='navbar-social flex'>
                                <li className='text-white'>
                                    <a href="https://www.instagram.com/aes_center_/" target="_blank" className='flex flex-center' rel="noopener noreferrer"><FaInstagram /></a>
                                </li>
                                <li className='text-white'>
                                    <a href="https://www.tiktok.com/@aes_center" target="_blank" rel="noopener noreferrer" className='flex flex-center'><FaTiktok /></a>
                                </li>
                                <li className='text-white'>
                                    <a href="https://wa.me/+38348660065" target="_blank" rel="noopener noreferrer" className='flex flex-center'><FaWhatsapp /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
