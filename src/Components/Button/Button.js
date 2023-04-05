import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

let Button = ({ children, href }) => {

  return (
    <Link className='button-link' to={href}>{children}</Link>

  )
}

export default Button