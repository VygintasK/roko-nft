import React from 'react'
import Photo from './Photo.png'
import './SubscribeWidget.css'

const SubscribeWidget = () => {
  return (
    <div className='SubscribeWidget'>
        <div className='SubscribeWidget-wrapper'>
            <img src={Photo} alt='Astronaut reading a newspaper'></img>
            <div>
              <h3>Join our weekly digest</h3>
              <p>Get exclusive promotions & updates straight to your inbox.</p>
              <div className='subscribe-input-wrap'>
                <input className='email-text' type='email' placeholder='Enter your email here'/>
                <input className='email-submit' type='submit' value='Subscribe'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SubscribeWidget