// import {Link} from 'react-router-dom'
import './CreateAccount.css'
// import { useState } from 'react'
import React from 'react'

import CreateAccountPic from './CreateAccount.png'

const CreateAccount = () => {

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(event.target.elements.name.value)
    console.log(event.target.elements.email.value)
    console.log(event.target.elements.password.value)
    
    event.target.reset()
  }

  return (
    <div className='CreateAccount'>
      <img src={CreateAccountPic} alt='random nft'></img>
      <div>
        <h2>Create account</h2>
        <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>

        <form className='create-account-form' onSubmit={submitHandler}>
          <div className='form-control'>
            <input id='name' type='text' placeholder='Username'/>
          </div>
          <div className='form-control'>
            <input id='email'type='email' placeholder='Email Address'/>
          </div>
          <div className='form-control'>
            <input id='password' type='text' placeholder='Password'/>
          </div>
          <div className='form-control'>
            <input id='confirmPassword' type='text' placeholder='Confirm Password'/>
          </div>
          <div className='form-control'>

          </div>
          <input type='Submit' className='create-account-button'  value='Create account' readOnly/>
        </form>
      </div>

    </div>
  )
}

export default CreateAccount