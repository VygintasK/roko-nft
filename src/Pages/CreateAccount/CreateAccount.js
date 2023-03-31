// import {Link} from 'react-router-dom'
import './CreateAccount.css'
import { useState } from 'react'
import React from 'react'

import CreateAccountPic from './CreateAccount.png'

const CreateAccount = () => {

  // const [submittedObj, setSubmittedObj] = useState('user')
  // let [usernameInfo, setUsernameInfo] = useState('')
  // let [emailInfo, setEmailInfo] = useState('')
  // let [passwordInfo, setPasswordInfo] = useState('')
  // let [confirmPasswordInfo, setConfirmPasswordInfo] = useState('')

  // const submitHandler = (event) => {
  //   event.preventDefault()
  //   console.clear()
  //   let { name, email, password, confirmPassword } = event.target.elements
  //   const hasNumber = /[0-9]/;
  //   const hasLetters = /[a-zA-Z]/;

  //   console.log(name.value.length > 3)
  //   console.log(email.value.includes("@"))
  //   console.log(hasNumber.test(password.value) && hasLetters.test(password.value))
  //   console.log(confirmPassword.value === password.value && confirmPassword.value.length > 0)

  //   name.value.length > 3 ? setUsernameInfo(true) : setUsernameInfo(false)
  //   email.value.includes("@") ? setEmailInfo(true) : setEmailInfo(false)
  //   hasNumber.test(password.value) && hasLetters.test(password.value) ? setPasswordInfo(true) : setPasswordInfo(false)
  //   confirmPassword.value === password.value && confirmPassword.value.length > 0 ? setConfirmPasswordInfo(true) : setConfirmPasswordInfo(false)

  //   if (usernameInfo) {    
  //     setSubmittedObj({
  //     userName: name.value,
  //     userEmail: email.value,
  //     userPassword: confirmPassword.value,
  //   })}

  const hasNumber = /[0-9]/;
  const hasLetters = /[a-zA-Z]/;
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })


  const usernameChangeHandler = (e) => {
    setUserData({ ...userData, username: e.target.value, })
  }
  const emailChangeHandler = (e) => {
    setUserData({ ...userData, email: e.target.value, })
  }
  const passwordChangeHandler = (e) => {
    setUserData({ ...userData, password: e.target.value, })
  }
  const passwordConfirmChangeHandler = (e) => {
    setUserData({ ...userData, confirmPassword: e.target.value })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    // event.target.reset()
    console.clear()
    console.dir(event.target.elements.name.value)
    console.log('Works')
  }
  return (
    <div className='CreateAccount'>
      <img src={CreateAccountPic} alt='random nft'></img>
      <div>
        <h2>Create account</h2>
        <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>

        <form className='create-account-form' onSubmit={submitHandler}>
          <div className='form-control'>

            <input id='name' placeholder='Username' onChange={usernameChangeHandler} />
            {userData.username.length < 5 ? <span>name must be more than 5 letters</span> : null}
          </div>

          <div className='form-control'>
            <input id='email' placeholder='Email Address' onChange={emailChangeHandler} />
            {!userData.email.includes('@') ? <span>must include @</span> : null}
          </div>

          <div className='form-control'>
            <input id='password' placeholder='Password' onChange={passwordChangeHandler} />
            {!hasLetters.test(userData.password) ? <span>letters </span> : null}
            {!hasNumber.test(userData.password) ? <span>numbers </span> : null}
          </div>

          <div className='form-control'>
            <input id='confirmPassword' placeholder='Confirm Password' onChange={passwordConfirmChangeHandler} />
            {!(userData.password === userData.confirmPassword) ? <span>must match password </span> : null}
          </div>
          <div className='form-control'>
          </div>
          <input type='Submit' className='create-account-button' value='Create account' readOnly />
        </form>
        <div className='InfoWrap'>
          {/* {!usernameInfo&&(<span>short name, </span>)}
          {!emailInfo&&(<span>bad email, </span>)}
          {!passwordInfo&&(<span>bad password, </span>)}
          {!confirmPasswordInfo&&(<span>password don't match. </span>)} */}
        </div>

      </div>

    </div>
  )
}

export default CreateAccount