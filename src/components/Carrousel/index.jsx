import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Card from '../Card'
const Carrousel = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
          perView: 5,
          spacing: 1,
        },
      })
    
      return (
          <div className=' w-[70%] flex items-center justify-center mx-auto'>

        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1"><Card/></div>
          <div className="keen-slider__slide number-slide2"><Card/></div>
          <div className="keen-slider__slide number-slide3"><Card/></div>
          <div className="keen-slider__slide number-slide4"><Card/></div>
          <div className="keen-slider__slide number-slide5"><Card/></div>
          <div className="keen-slider__slide number-slide6"><Card/></div>
        </div>
        </div>

      )
}

export default Carrousel
