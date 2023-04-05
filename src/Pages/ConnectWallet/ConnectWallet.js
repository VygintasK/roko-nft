import React from 'react'
import ConnectWalletPic from './ConnectWallet.png'
import WalletButton from '../../Components/WalletButton/WalletButton'

import Metamask from './Metamask.png'
import WalletConnect from './WalletConnect.png'
import Coinbase from './Coinbase.png'

import './ConnectWallet.css'

const ConnectWallet = () => {
  return (
    <div className='ConnectWallet'>
        <div className='img-wrap'>
            <img src={ConnectWalletPic} alt="Space connection" />
        </div>
        <div className='content-wrap'>
            <h2>Connect wallet</h2>
            <p>Choose a wallet you want to connect. There are several wallet providers.</p>
            <WalletButton href='#'>
               <img className='WalletConnectLogo' src={Metamask} alt="fox"/>Metamask
            </WalletButton>

            <WalletButton href='#' text='Wallet Connect'>
                <img className='WalletConnectLogo' src={WalletConnect} alt="fox"/>Wallet Connect
            </WalletButton>
            <WalletButton href='#' text='Coinbase'>
                <img className='WalletConnectLogo' src={Coinbase} alt="fox"/>Coinbase
            </WalletButton>
        </div>

    </div>
  )
}

export default ConnectWallet
