import React from 'react'
import { ReactComponent as MagnifyingGlass } from "./MagnifyingGlass.svg"

const Marketplace = () => {
  return (
    <div>
      <h2>Browse Marketplace</h2>
      <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
      <div className='SearchNFT'>
        <input type="text" placeholder="Search your favourite NFTs"></input>
        <MagnifyingGlass/>
      </div>

    </div>
  )
}

export default Marketplace