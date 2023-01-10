import React from 'react'
import nft from '../../Img/NFTs/Image Placeholder.png'
import'./NFTcard.css'
import nftDataArr from '../../Object/Object'


const NFTcard = () => {
  return (
    <div className='NFT-card'>
        <img src={nft} alt='nft'/>
        <div className='nft-info-wrap'>
            <h5>Magic Mushroom 0325</h5>
            <div className='card-artist'>
                <img src={nftDataArr[0].avatar}></img>
                <p>Shroomie</p>
            </div>
            <div className='price-wrap'>
                <div className='price'>
                    <p>Price</p>
                    <span>1.63 ETH</span>  
                </div>
                <div className='bid'>
                    <p>Highest Bid</p>
                    <span>0.33 wETH</span>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default NFTcard