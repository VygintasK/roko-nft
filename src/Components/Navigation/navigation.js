import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../Img/logo.png'
import { ReactComponent as UserSvg } from "./user.svg"
import Button from '../Button/Button'
import './navigation.css'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <Link to='/'><img className='navLogo' src={logo} alt="Horse"></img></Link>
      <div className='nav-button-wrap'>
        <ul className='navUl'>
          <li><Link to='/Marketplace'>Marketplace</Link></li>
          <li><Link to='/Rankings'>Rankings</Link></li>
          <li><Link to='/#'>Connect a wallet</Link></li>
        </ul>
        <Button href='/CreateAccount'>
          <UserSvg className='button-svg'/>Sign Up
        </Button>

      </div>
    </nav>
  )
}

export default Navigation