import React from 'react'
import Avatar1 from '../../Img/Avatars/Avatar Placeholder.png'

const ArtistRankingComponent = () => {
  return (
    <div className='artist-wrap'>
        <p className='number'>1</p>
        <div className='character-wrap'>
            <img src={Avatar1} alt='Animated face, avatar'></img>
            <h5>Jaydon Ekstrom Bothman</h5>
        </div>
        <p>+1.41%</p>
        <p>602</p>
        <p>12.4 ETH</p>
    </div>
  )
}

export default ArtistRankingComponent