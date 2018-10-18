import React from 'react'
import header from '../img/header.jpg'
import { Link } from 'gatsby'

const HeaderImage = () => (
<div>
    <Link to="/">
    <figure className="image">
        <img src={header} alt="Header" style={{ paddingBottom: -10,paddingTop: 10,paddingRight: 10,paddingLeft: 10}} />
    </figure>
    </Link>
</div>
)

export default HeaderImage
