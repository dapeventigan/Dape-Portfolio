import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './AboutCarousel.css'

import Image1 from '../../assets/carousel/me2.jpeg'
import Image2 from '../../assets/carousel/grad.JPG'
import Image3 from '../../assets/carousel/me.jpg'
import Image4 from '../../assets/carousel/me3.jpeg'
import Image5 from '../../assets/carousel/valo.JPG'
import Image6 from '../../assets/carousel/m4.JPG'

const AboutCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    return (
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide"><img src={Image1} alt=''/></div>
            <div className="embla__slide"><img src={Image2} alt=''/></div>
            <div className="embla__slide"><img src={Image3} alt=''/></div>
            <div className="embla__slide"><img src={Image4} alt=''/></div>
            <div className="embla__slide"><img src={Image5} alt=''/></div>
            <div className="embla__slide"><img src={Image6} alt=''/></div>
          </div>
        </div>
      )
}

export default AboutCarousel