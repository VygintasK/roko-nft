import React from 'react'
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
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
          </ul>
        </div>
        <div className='join'>
          <h5>Join our weekly digest</h5>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <input></input>
        </div>
      </div>
      <p>Ⓒ NFT Market. Use this template freely.</p>
    </footer>
  )
}

export default Footer