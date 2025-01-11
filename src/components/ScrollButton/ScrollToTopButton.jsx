import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';  // Përdorim shigjetën nga react-icons
import './ScrollToTopButton.css'; // Krijoni një skedar CSS për butonin

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Funksioni për të monitoruar skrolimin
  const checkScrollTop = () => {
    if (!showButton && window.pageYOffset > 300) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 300) {
      setShowButton(false);
    }
  };

  // Përditësoni gjendjen në çdo skrolim
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showButton]);

  // Funksioni për t'ju kthyer në fillim
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
