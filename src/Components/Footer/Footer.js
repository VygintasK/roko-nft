import React from 'react'
import {Link} from 'react-router-dom'

import ButtonSubscribe from '../ButtonSubscribe/ButtonSubscribe'
import logo from '../../Img/logo.png'
import './Footer.css'
import { ReactComponent as DiscordLogo } from "./DiscordLogo.svg"
import { ReactComponent as InstagramLogo } from "./InstagramLogo.svg"
import { ReactComponent as TwitterLogo } from "./TwitterLogo.svg"
import { ReactComponent as YoutubeLogo } from "./YoutubeLogo.svg"

const Footer = () => {
  return (
    <footer>
      <div className='footerInfo'>
        <div className='market'>
          <img alt='logo' src={logo}></img>
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <div className='social-networks-wrap'>
            <DiscordLogo/>
            <YoutubeLogo/>
            <TwitterLogo/>
            <InstagramLogo/>
          </div>
        </div>
        <div className='explore'>
          <h5>Explore</h5>
          <ul>
            <li><Link to='/Marketplace'>Marketplace</Link></li>
            <li><Link to='/Rankings'>Rankings</Link></li>
            <li><Link to='/Wallet'>Connect a wallet</Link></li>
          </ul>
        </div>
        <div className='join'>
          <h5>Join our weekly digest</h5>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <ButtonSubscribe/>
          
        </div>
      </div>
      <p>Ⓒ NFT Market. Use this template freely.</p>
    </footer>
  )
}

export default Footer