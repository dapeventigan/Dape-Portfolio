import React from 'react';
import CVdape from '../../assets/dape_cv.pdf';
import './HeaderBtn.css';

const headerbtn = () => {
  return (
    <div className="cta">
        <a href={CVdape} download className='glow-on-hover'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default headerbtn