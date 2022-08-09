import React from 'react'
import './styles.css'

function HorizontalCard (props) {
  return (
    <div className='Horizontal-card'>
      <span className='Horizontal-card__shadow'></span>
      <img src={props.imagePath} alt='Imagem do imóvel' className='Horizontal-card__image' />
      <div className="Horizontal-card__infos">
        <h4>{props.local}</h4>
        <h4>R${props.price}</h4>
      </div>
    </div>
  )
}

export default HorizontalCard
