import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

function Header() {
  return (
    <div id="header-wrapper">
        <header id="header" className="container">
            <Logo />
            <Nav />
        </header>
        
    </div>
  )
}

export default Header