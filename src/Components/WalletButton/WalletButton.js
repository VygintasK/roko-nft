import React from 'react'
import { Link } from 'react-router-dom'

import './WalletButton.css'

const WalletButton = ({ href, children }) => {
    return (
        <Link className='wallet-Button-link' to={href}>{children}</Link>
    )
}

export default WalletButton

