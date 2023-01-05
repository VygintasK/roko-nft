import React from 'react'
import './ButtonSubscribe.css'

const ButtonSubscribe = () => {
  return (
    <div className='subscribe-input-wrap'>
        <input className='email-text' type='email' placeholder='Enter your email here'/>
        <input className='email-submit' type='submit' value='Subscribe'/>
    </div>
  )
}

export default ButtonSubscribe