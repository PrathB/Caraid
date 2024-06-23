import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
        <img 
            className="header_logo"
            src="https://cartrends.in/cdn/shop/files/logo_dd957e5d-cd0e-426d-9c65-be8dfa938371_250x.png?v=1631198256"
        />

        <div className='header_search'>
            <input className='header_seacrhInput' type='text'/>
        </div>

        <div className='header_nav'>
            <div className='header_option'>
                <span className='header__optionLineOne'>Hello</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>
        </div>
      
    </div>
  )
}

export default Header
