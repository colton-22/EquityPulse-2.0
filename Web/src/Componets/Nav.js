import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-light bg-light" style={{position:"fixed", top:"0", width:"100%", zIndex: "99"}}>
          <a href="/" className="navbar-brand">
            EquityPulse
          </a>
      </nav>
    )
}

export default Nav
