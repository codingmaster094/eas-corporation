'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Top_button from "../../../public/img/Top-button.svg";

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button if scroll position is more than 100px
    setVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    const scrollTo = (target, duration) => {
      const start = window.scrollY; // Current scroll position
      const change = target - start; // Distance to scroll
      const increment = 20; // Interval in milliseconds
      let currentTime = 0;

      const animateScroll = () => {
        currentTime += increment; // Increment the time
        const val = easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val); // Scroll to the new position
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll); // Continue the animation
        }
      };

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2; // Normalize time
        if (t < 1) return (c / 2) * t * t + b; // First half
        t--; // Adjust time for second half
        return (-c / 2) * (t * (t - 2) - 1) + b; // Second half
      };

      animateScroll(); // Start the animation
    };

    scrollTo(0, 600); // Scroll to top over 600ms
  };

  useEffect(() => {
    // Add scroll event listener to toggle button visibility
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        background: '#084887',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: visible ? 'block' : 'none', // Show/hide based on visibility state
      }}
      aria-label="Scroll to top" // Accessibility label
    >
      {/* SVG Icon */}
      <Image src={Top_button} alt="Top_button"/>
    </button>
  );
};

export default TopButton;
