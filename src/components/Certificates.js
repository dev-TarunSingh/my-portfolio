import React, { useState } from 'react';
import './certificates.css';
import nextIcon from './media/next.svg';
import prevIcon from './media/prev.svg';

export default function Certificates({ setShowCerti, showCerti }) {
  const [activeIcon, setActiveIcon] = useState(null);

  const [currentCerti, setCurrrentCerti] = useState([]);

  const handleClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className='fullscreen'>
      <button className='close-btn' onClick={() => setShowCerti(false)}>Close</button>
      <div className='container'>
        <div>Certificates</div>
        <div className='navigation'>
          <img
            src={prevIcon}
            alt="Previous"
            className={`nav-icon ${activeIcon === 'prev' ? 'active' : ''}`}
            onClick={() => handleClick('prev')}
          />
          <img
            src={nextIcon}
            alt="Next"
            className={`nav-icon ${activeIcon === 'next' ? 'active' : ''}`}
            onClick={() => handleClick('next')}
          />
        </div>
      </div>
    </div>
  );
}