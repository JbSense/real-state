/* eslint-disable prefer-const */
import React from 'react'
import ScrollElement from '../../components/ScrollElement/ScrollElement'
import VerticalCard from '../../components/VerticalCard/VerticalCard'
import './styles.css'

function Tests () {
  let scrollCardTwo = 70
  let scrollCardTree = 140
  let scrollCardFour = 210

  const t = () => {
    let scroll = document.querySelector('.Tests__vertical-cards').scrollLeft
    const cards = document.querySelectorAll('.Vertical-card')

    const cardWitdh = cards[0].clientWidth / 2

    if (scroll >= cardWitdh && scrollCardTwo > 0) {
      scrollCardTwo -= 2
      cards[1].style.transform = 'translateX(-' + scrollCardTwo + 'px)'
    }

    if (scroll >= (cardWitdh * 2) && scrollCardTree > 0) {
      scrollCardTree -= 2
      cards[2].style.transform = 'translateX(-' + scrollCardTree + 'px)'
    }

    if (scroll >= (cardWitdh * 3) && scrollCardFour > 0) {
      scrollCardFour -= 2
      cards[3].style.transform = 'translateX(-' + scrollCardFour + 'px)'
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

export default Tests
