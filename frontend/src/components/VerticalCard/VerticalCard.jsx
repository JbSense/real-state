import React from 'react'
import './styles.css'

function VerticalCard (props) {
  return (
    <div className='Vertical-card'>
      <span className='Vertical-card__shadow'></span>
      <img src={props.imagePath} alt='Imagem do imóvel' className='Vertical-card__image' />
      <div className="Vertical-card__infos">
        <h4>{props.local}</h4>
        <h4>R${props.price}</h4>
      </div>
    </div>
  )
}

export default VerticalCard
