import React from 'react'
import { ReactComponent as RocketLaunch } from "./rocketLaunch.svg";
import Button from '../../../Components/Button/Button'
import './heroSection.css'
import nftDataArr from '../../../Object/Object'

let randomNumber = Math.floor((Math.random() * nftDataArr.length) + 1)

let randomAuthorOBJ
nftDataArr.forEach(element => {
    if(Number(element.id)===randomNumber){
        randomAuthorOBJ=element
    }
});
// console.log(nftDataArr)
let {NFT,nftName,author,avatar}=randomAuthorOBJ

const heroSection = () => {
  return (
    <div className='heroSection'>
        <div className='HeroHeadline'>
            <div className='HeroText'>
                <h1>Discover <br/> digital art & Collect NFTs</h1>
                <p>NFT marketplace UI created with Anima for <br/> Figma. Collect, buy and sell art from more <br/>than 20k NFT artists.</p>
                <Button href='/#'><RocketLaunch className='button-svg'/>Get Started</Button>
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
            <img className='random-NFT' alt="random NFT" src={NFT}/>
            <h5>{nftName}</h5>
            <div className='Artist'>
                <img  className='avatar' alt="avatar" src={avatar}/>
                <p>{author}</p>
            </div>
        </div>   
    </div>
  )
}

export default heroSection