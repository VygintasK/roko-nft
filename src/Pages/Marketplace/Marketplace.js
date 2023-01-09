import React from 'react'
import { ReactComponent as MagnifyingGlass } from "./MagnifyingGlass.svg"
import './Marketplace.css'
import NFTcard from '../../Components/NFTcard/NFTcard'

const Marketplace = () => {
  return (
    <div className='marketplace'>
      <div className='marketplace-wrap'>
        <div className='marketplace-headline'>
          <h2>Browse Marketplace</h2>
          <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
          <form className='SearchNFT'>
            <input type="text" placeholder="Search your favorite NFTs"></input>
            <MagnifyingGlass/>
          </form>
        </div>
        <div className='marketplace-selection'>
          <div className='nfts'>
            <h5>NFTs</h5>
            <p>302</p>
          </div>
          <div className='collections inactive'>
            <h5>Collections</h5>
            <p>67</p>
          </div>
        </div>
      </div>
      <div className='NTF-cards-selection'>
      <span>---------FETCH FROM API OBJ HERE --------- </span>
      <div className='NFT-card-wrap'>
        <NFTcard/>
        <NFTcard/>
        <NFTcard/>
        <NFTcard/>
      </div>
    </div>
  </div>
  )
}

export default Marketplace