import React from 'react'
import './styles.css'

function InfoCard (props) {
  return (
    <div className='Info-card'>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}

export default InfoCard
