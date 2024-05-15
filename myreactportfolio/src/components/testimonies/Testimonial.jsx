import React from 'react'
import Slider from 'react-slick'
function Testimonial() {
    const settings={
        dots:true,
        Infinity:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
    };
  return (
    <div className="section testimony" id="testimony">
      <div className="section-title">
        <span className="subtitle sub-title">Read our Testimonials</span>
        <h1 className="title sub-title">Explore Testimonials</h1>
      </div>
      <div className="max-w-6xl mx-auto">
  <Slider {...settings} style={{ height: '500px' }}>
    <div className='w-full'>
      <div className='w-full h-[500px] flex justify-between bg-white-400'>
        <div className='w-35% h-full bg-red-400'>fg</div>
        <div className='w-60% h-full bg-blue-400'>bn</div>
      </div>
    </div>
  </Slider>
</div>

        </div>
  )
}

export default Testimonial
