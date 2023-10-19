import React from 'react'
import logo from "../../assets/logo/long-logo.png";

import "./styles.css"

function Header() {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='navbar-logo' />
      <div className='search-bar'>
        <div className='search-bar-text'>Anywhere</div>
        <div className='search-bar-text'>Any Week</div>
        <div className='search-bar-text2'>Any quests</div>

      </div>
      <div className='profile-container'></div>
    </div>
  )
}

export default Header