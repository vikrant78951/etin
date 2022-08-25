import React from 'react'
import './Header.css'

import Auth from '../auth/Auth'
import Logo from '../../assest/img/logo-large.png';


const Header = () => {
    return (
        <div className="header" id="header">
            
            <header>
                <div className="header-left">
                    <span className="logo">
                        <img src={Logo} alt="logo" />
                    </span>
                </div>
                <div className="header-right">
                    <Auth />
                </div>
            </header>

        </div>
    )
}

export default Header