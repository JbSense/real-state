import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function MenuNav () {
  return (
    <div className='Menu-nav'>
      <div className='Menu-nav__links'>
        <Link to='#'>Apartamentos</Link>
        <Link to='#'>Casas</Link>
        <Link to='#'>Geminados</Link>
        <Link to='#'>Terrenos</Link>

        <div className='links__contatos'>
          <Link to='#' className='contatos__link'>Contatos</Link>
        </div>
      </div>
    </div>
  )
}

export default MenuNav
