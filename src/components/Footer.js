import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/Footer.scss';

const Footer = () => {

  const { toggleIsContact, footerSocialsInfo } = useContext(Context);

  useEffect(() => {
    const h1 = document.querySelector('.footer-title h1');
    const btn = document.querySelector('.footer-title-btn');

    const handleHover = () => {
      h1.style.color = 'white';
      h1.style.opacity = 1;
    };

    const handleMouseLeave = () => {
      h1.style.color = '';
      h1.style.opacity = 0.9;
    };

    btn.addEventListener('mouseover', handleHover);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mouseover', handleHover);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const socialLink = footerSocialsInfo.map( i => (
    <a key={i.href} href={i.href} className='footer-social-link'>
      <FontAwesomeIcon className={`footer-social ${i.className}`} icon={i.icon} />
    </a>
  ))

  return (
    <footer className='footer'>

      <div className='footer-socials'>
        { socialLink }
      </div>

      <div className='footer-title'>
        <div className='footer-title-bg'>
          <h1> Get in touch </h1>
        </div>
        <div className='footer-title-btn-wrap'>
          <button className='footer-title-btn' onClick={toggleIsContact}> Contact </button>
        </div>
      </div>

    </footer>
  )
}

export default Footer
