import React from 'react'
import'./NFTcard.css'

const NFTcard = (props) => {
    let {NFT,author,avatar,nftName}=props.artistObject

  return (
    <div className='NFT-card'>
        <img className='nft-pic' src={NFT} alt='nft'/>
        <div className='nft-info-wrap'>
            <h5>{nftName}</h5>
            <div className='card-artist'>
                <img alt='avatar' src={avatar}/>
                <p>{author}</p>
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