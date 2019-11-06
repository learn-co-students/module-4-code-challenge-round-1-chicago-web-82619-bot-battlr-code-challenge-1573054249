import React from 'react'

const NavBar = () => {
  return(
    <nav className="new-wrapper blue darken-1">
      <a className="brand-logo">BotVille</a>
      <ul className="right">
        <li><a href="/">Home</a></li>
        <li><a href="/botcollection">Bot Collection</a></li>
        <li><a href="/botarmy">My Bot Army</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
