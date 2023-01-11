import React from 'react'
import {Link} from 'react-router-dom'
import './CreateAccount.css'

import CreateAccountPic from './CreateAccount.png'

const CreateAccount = () => {
  return (
    <div className='CreateAccount'>
      <img src={CreateAccountPic}></img>
      <div>
        <h2>Create account</h2>
        <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
        <form className='create-account-form'>
          <input type='text'/>
          <input type='email'/>
          <input type='text'/>
          <input type='text'/>
          <Link className='create-account-button'>Create account</Link>
        </form>
      </div>

    </div>
  )
}

export default CreateAccount