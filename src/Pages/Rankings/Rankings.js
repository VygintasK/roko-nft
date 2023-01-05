import React from 'react'
import {Link} from 'react-router-dom'

import './Rankings.css'
import Avatar1 from '../../Img/Avatars/Avatar Placeholder.png'
import ArtistRankingComponent from '../../Components/ArtistRankingComponent/ArtistRankingComponent'

const Rankings = () => {
  return (
    <div className='Rankings'>
      <div className='ranking-headline'>
        <h2>Top Creators</h2>
        <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
      </div>
      <div className='ListWrap'>
        <div className='day-filter-wrap'>
          <Link>Today</Link>
          <Link>This Week</Link>
          <Link>This Month</Link>
          <Link>All Time</Link>
        </div>
        <div className='artist-filter-wrap'>
          <Link>#</Link>
          <Link>Artist</Link>
          <Link>Change</Link>
          <Link>NFTs Sold</Link>
          <Link>Volume</Link>
        </div>
        <div className='filtered-artists-wrap'>
          <ArtistRankingComponent/>
          <ArtistRankingComponent/>
          <ArtistRankingComponent/>
          <ArtistRankingComponent/>
          <ArtistRankingComponent/>
          <ArtistRankingComponent/>
        </div>
      </div> 
    </div>
  )
}

export default Rankings