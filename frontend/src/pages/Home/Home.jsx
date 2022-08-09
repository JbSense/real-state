/* eslint-disable no-octal-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React from 'react'
import './styles.css'
import Banner from '../../components/Banner/Banner'
import About from '../../components/About/About'
import VerticalCard from '../../components/VerticalCard/VerticalCard'
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard'

function Home () {
  return (
    <div className='Home'>
      <Banner />
      <About />

      <div className='Home__vertical-cards'>
        <div className='vertical-cards__cards'>
          <VerticalCard
            imagePath='images\cards\card-house-1.jpg'
            local='Boston - Massachusetts'
            price='32.000.000'/>
          <VerticalCard
            imagePath='images\cards\card-house-2.jpg'
            local='Londres - Inglaterra'
            price='$24.000.000'/>
          <VerticalCard
            imagePath='images\cards\card-house-3.jpg'
            local='Los Angeles - California'
            price='$55.000.000'/>
          <VerticalCard
            imagePath='images\cards\card-house-4.jpg'
            local='Miami - Florida'
            price='$102.000.000'/>
        </div>
      </div>

      <div className='Home__destaques'>
        <h2 className='destaques__title'>Destaques</h2>
        <div className='destaques__cards'>
          <HorizontalCard
            imagePath='images\cards\101181.jpg'
            local='Toronto - Canadá'
            price='18.000.000'
          />
          <HorizontalCard
            imagePath='images\cards\235352.jpg'
            local='Toronto - Canadá'
            price='18.000.000'
          />
          <HorizontalCard
            imagePath='images\cards\396552.jpg'
            local='Toronto - Canadá'
            price='18.000.000'
          />
          <HorizontalCard
            imagePath='images\cards\984566.jpg'
            local='Toronto - Canadá'
            price='18.000.000'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
