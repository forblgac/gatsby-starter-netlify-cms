import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Title = () => (
<div>
    <Link to="/" className="title">
      <figure className="image">
        <img src={logo} alt="MurMurOus" style={{ width: '168px', paddingTop: '10px', marginLeft: 'auto', marginRight: 'auto'}} />
      </figure>
    </Link>
</div>
    )

export default Title
