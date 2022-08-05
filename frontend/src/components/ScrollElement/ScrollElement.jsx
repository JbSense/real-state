import React from 'react'
import './styles.css'

function ScrollElement (props) {
  return (
    <div className='Scroll-element'>
      {props.children}
    </div>
  )
}

export default ScrollElement
