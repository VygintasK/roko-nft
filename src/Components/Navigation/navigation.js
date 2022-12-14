import React from 'react'
import logo from './logo.png';
import { ReactComponent as UserSvg } from "./user.svg";
import './navigation.css'

const Navigation = () => {
  return (
    <div className='navigation'>
      <img className='navLogo' src={logo} alt="Horse"></img>
      <div className='nav-button-wrap'>
        <ul className='navUl'>
          <li><a href='.#'>Marketplace</a></li>
          <li><a href='.#'>Rankings</a></li>
          <li><a href='.#'>Connect a wallet</a></li>
        </ul>
        <a className='signUp' href='.#'><UserSvg className="user-svg"/> <span>Sign Up</span></a>
      </div>

    </div>
  )
}

export default Navigation