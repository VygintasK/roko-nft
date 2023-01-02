import React from 'react'
import { ReactComponent as RocketLaunch } from "./rocketLaunch.svg";
import imagePlaceholder from "./ImagePlaceholder.png"
import avatarPlaceholder from "./AvatarPlaceholder.png"
import './heroSection.css'

const heroSection = () => {
  return (
    <div className='heroSection'>
        <div className='HeroHeadline'>
            <div className='HeroText'>
                <h1>Discover digital art & Collect NFTs</h1>
                <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                <a className='signUp' href='.#'><RocketLaunch className="RocketLaunch"/><span>Get Started</span></a>
            </div>
            <div className='AdditionalInfo'>
                <div>
                    <h4>240k+</h4>
                    <p>Total Sale</p>
                </div>
                <div>
                    <h4>100k+</h4>
                    <p>Auctions</p>
                </div>
                <div>
                    <h4>240k+</h4>
                    <p>Artists</p>
                </div>
            </div>
        </div>
        <div className='ArtistCard'>
            <img src={imagePlaceholder}/>
            <h5>Space Walking</h5>
            <div className='Artist'>
                <img src={avatarPlaceholder}/>
                <p>Animakid</p>
            </div>
        </div>   
    </div>
  )
}

export default heroSection