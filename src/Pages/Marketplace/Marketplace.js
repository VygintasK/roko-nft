import React from 'react'
import { ReactComponent as MagnifyingGlass } from "./MagnifyingGlass.svg"
import './Marketplace.css'

const Marketplace = () => {
  return (
    <div className='marketplace'>
      <div className='marketplace-headline'>
        <h2>Browse Marketplace</h2>
        <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
        <form className='SearchNFT'>
          <input type="text" placeholder="Search your favourite NFTs"></input>
          <MagnifyingGlass/>
        </form>
      </div>
      <div className='marketplace selection'>
        <div className='nfts'>
          <h5>NFTs</h5>
          <p>302</p>
        </div>
        <div className='collections'>
          <h5>Collections</h5>
          <p>67</p>
        </div>
      </div>
    </div>
  )
}

export default Marketplace