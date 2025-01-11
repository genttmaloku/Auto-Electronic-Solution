import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import VideoBg from '../../assets/images/aes.mp4';

const Header = () => {
  const videoRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Siguron që videoja të luhet
    }

    // Shto klasën 'left' pas 3 sekondash (ose kohë sipas dëshirës)
    const timer = setTimeout(() => {
      setIsMoved(true);
    }, 3000);

    return () => clearTimeout(timer); // Pastrim i timer-it
  }, []);

  return (
    <header className='header flex flex-center flex-column'>
      <Navbar />
      <div className='video-container'>
        <video ref={videoRef} src={VideoBg} autoPlay loop muted playsInline className="background-video" preload="auto" />
      </div>
      <div className='container'>
        <div className='header-content text-center flex flex-column'>
          <h1 className={`text-uppercase header-title ${isMoved ? 'left' : ''}`}>
            Auto Electronic Solution
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
