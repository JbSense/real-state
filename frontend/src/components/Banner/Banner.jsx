import React from 'react'
import './styles.css'

function Banner () {
  return (
    <div className='Banner'>
      <img src='images/banners/984566.jpg' alt='Imagem do banner' className='Banner__image'/>
      <div className='Banner__texts'>
        <h4>Aqui realizamos sonhos</h4>
        <h4>Encontre um lugar para chamar de lar</h4>
      </div>
    </div>
  )
}

export default Banner
