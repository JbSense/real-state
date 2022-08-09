/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React from 'react'
import VerticalCard from '../../components/VerticalCard/VerticalCard'
import './styles.css'

function Tests () {
  const t = () => {
    let scroll = document.querySelector('.Tests__vertical-cards').scrollLeft
    const cards = document.querySelectorAll('.Vertical-card')
    const localCardOne = cards[1].getBoundingClientRect().left

    // if (localCardOne < 50 && localCardOne > 0) {
    //   document.querySelector('.Tests__vertical-cards').classList.add('focus')
    // }

    if (cards[1].getBoundingClientRect().left < (cards[1].clientWidth / 3)) {
      cards[0].style.marginRight = '10px'
    } else {
      cards[0].style.marginRight = '-60px'
    }

    if (cards[2].getBoundingClientRect().left < (cards[1].clientWidth / 3)) {
      cards[1].style.marginRight = '10px'
    } else {
      cards[1].style.marginRight = '-60px'
    }

    if (cards[3].getBoundingClientRect().left < (cards[1].clientWidth / 3)) {
      cards[2].style.marginRight = '10px'
    } else {
      cards[2].style.marginRight = '-60px'
    }
  }

  return (
    <div className='Tests'>
      {/* <div className="Tests__fonts">
        <h1>Apartamentos</h1>
        <h2>Apartamentos</h2>
        <h3>Apartamentos</h3>
        <h4>Apartamentos</h4>
        <p>Apartamentos</p>
      </div> */}

      {/* <img src='images/shanks-icon.jpg' alt='' /> */}

      <div className='Tests__vertical-cards' onScroll={t}>
        <div className='vertical-cards__cards-container'>
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
    </div>
  )
}

export default Tests
