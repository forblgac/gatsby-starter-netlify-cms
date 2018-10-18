import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Title = () => (
<div>
    <Link to="/" className="title">
      <figure className="image">
      </figure>
        <img src={logo} alt="MurMurOus" style={{ width: '168px',paddingLeft: '10px', paddingTop: '10px'}} />
    </Link>
</div>
    )

export default Title
