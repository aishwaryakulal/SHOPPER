import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/product_1.webp'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS</h2>
<div>
<div className='hero-hand-icon'>
    <p>New</p>
    <img src={hand_icon} alt=""/>
</div>
<p>Collections</p>
<p> for Everyone</p>


</div>

<div className='hero-latest-btn'>
    <div >Latest Collections</div>
    <img src={arrow_icon} alt=""/>
</div>
      </div>



<div className='hero-right'></div>

<img src ={hero_image} alt=""/>

    </div>
  )
}

export default Hero
