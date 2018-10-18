import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
        <hr/>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          このサイトについて
        </Link>
        <Link className="navbar-item" to="/tags/python/">
          Python
        </Link>

      </div>
      <div className="navbar-end">
        <hr/>
      </div>
    </div>
  </nav>
)

export default Navbar
