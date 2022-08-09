import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import './styles.css'

function About () {
  return (
    <div className='About'>
      <h3 className='About__title'>Sobre nós</h3>
      <p className='About__texts'>Contrary to popular belief, Lorem Ipsum is not simply random text.
        Ithas roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old.</p>

      <div className='About__infos-cards'>
        <div className='infos-cards__cards'>
          <InfoCard title='+ de 50' desc='imóveis vendidos'/>
          <InfoCard title='+ de 20' desc='imóveis alugados'/>
          <InfoCard title='+ de 30' desc='imóveis à venda'/>
        </div>
      </div>
    </div>
  )
}

export default About
