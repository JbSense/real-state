import React from 'react'
import { Link } from 'react-router-dom'
import MenuNav from '../MenuNav/MenuNav'
import './styles.css'

function Header () {
  let navOpen = false

  const openNav = () => {
    if (!navOpen) document.querySelector('.Header').classList.add('nav-open')
    if (navOpen) document.querySelector('.Header').classList.remove('nav-open')
    navOpen = navOpen === false
  }

  return (
    <div className='Header'>
      <div className='Header__logo'>
        <Link to='/'><h3>Logo</h3></Link>
      </div>

      <div className='Header__menu-toggle' onClick={openNav}>
        <span className='menu-toggle__top-line'></span>
        <span className='menu-toggle__bottom-line'></span>
      </div>

      <MenuNav />
    </div>
  )
}

export default Header
