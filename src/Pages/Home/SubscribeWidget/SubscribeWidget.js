import React from 'react'
import Photo from './Photo.png'
import './SubscribeWidget.css'
import ButtonSubscribe from '../../../Components/ButtonSubscribe/ButtonSubscribe'

const SubscribeWidget = () => {
  return (
    <div className='SubscribeWidget'>
        <div className='SubscribeWidget-wrapper'>
            <img src={Photo} alt='Astronaut reading a newspaper'></img>
            <div>
              <h3>Join our weekly digest</h3>
              <p>Get exclusive promotions & updates straight to your inbox.</p>
              <ButtonSubscribe></ButtonSubscribe>
            </div>
        </div>
    </div>
  )
}

export default SubscribeWidget