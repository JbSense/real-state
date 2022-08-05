/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React from 'react'
import './styles.css'
import Banner from '../../components/Banner/Banner'
import About from '../../components/About/About'
import VerticalCard from '../../components/VerticalCard/VerticalCard'
import ScrollElement from '../../components/ScrollElement/ScrollElement'

function Home () {
  return (
    <div className='Home'>
      <Banner />
      <About />

      <div className='Home__vertical-cards'>
        <ScrollElement>
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
        </ScrollElement>
      </div>
    </div>
  )
}

export default Home
