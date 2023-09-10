import React from 'react';
import CVdape from '../../assets/dape_cv.pdf';

const headerbtn = () => {
  return (
    <div className="cta">
        <a href={CVdape} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default headerbtn