import React from 'react'

const ArtistRankingComponent = (props) => {
  // {console.log(props)}
  return (
    <div className='artist-wrap'>
        <p className='number'>{props.id}</p>
        <div className='character-wrap'>
            <img src={props.avatar} alt='Animated face, avatar'></img>
            <h5>{props.author}</h5>
        </div>
        <p>+1.41%</p>
        <p>602</p>
        <p>12.4 ETH</p>
    </div>
  )
}

export default ArtistRankingComponent