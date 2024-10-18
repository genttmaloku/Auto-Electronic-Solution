import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import {FaPaperPlane} from "react-icons/fa";
import VideoBg from '../../assets/images/aes.mp4';
import { useEffect, useRef } from 'react';


const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Siguron që videoja të luhet
    }
  }, []);

  return (
    <header className='header flex flex-center flex-column'>
      <Navbar />
      <div className='video-container'>
        <video ref={videoRef} src={VideoBg} autoPlay loop muted playsInline  className="background-video" preload="auto"  />
      </div>
      <div className='container'>
        <div className='header-content text-center flex flex-column'>
          <h1 className='text-uppercase header-title'>Auto Electronic Solution</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;