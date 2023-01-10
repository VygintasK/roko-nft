import React from 'react'
import nftDataArr from '../../Object/Object'


const ArtistRankingComponent = () => {
  return (
    <div className='artist-wrap'>
        <p className='number'>1</p>
        <div className='character-wrap'>
            <img src={nftDataArr[0].avatar} alt='Animated face, avatar'></img>
            <h5>Jaydon Ekstrom Bothman</h5>
        </div>
        <p>+1.41%</p>
        <p>602</p>
        <p>12.4 ETH</p>
    </div>
  )
}

export default ArtistRankingComponent