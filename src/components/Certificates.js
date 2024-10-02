import React, { useState } from 'react';
import './certificates.css';
import nextIcon from './media/next.svg';
import prevIcon from './media/prev.svg';

// Import certificate images
import cert5 from './media/Certificates/codealpha.png';
import cert2 from './media/Certificates/jscerti.png';
import cert3 from './media/Certificates/governcerti.png';
import cert4 from './media/Certificates/DellCerti.png';
import cert1 from './media/Certificates/cs50.png';
import close from './media/close.png';

const certificates = [cert1, cert2, cert3, cert4, cert5];

export default function Certificates({ setShowCerti, showCerti }) {
  const [activeIcon, setActiveIcon] = useState(null);
  const [currentCertiIndex, setCurrentCertiIndex] = useState(0);

  const handleClick = (icon) => {
    setActiveIcon(icon);
    if (icon === 'next') {
      setCurrentCertiIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    } else if (icon === 'prev') {
      setCurrentCertiIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
    }
  };

  return (
    <div className='fullscreen'>
      <button className='close-btn' onClick={() => setShowCerti(false)}>
        <img src={close} alt='close' style={{height: 40, width: 40}}/>
      </button>
      <div className='container'>
        <div className='certificate-display'>
          <img src={certificates[currentCertiIndex]} alt={`Certificate ${currentCertiIndex + 1}`} />
        </div>
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