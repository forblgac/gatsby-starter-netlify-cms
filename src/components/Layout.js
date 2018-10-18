import React from 'react'
import Helmet from 'react-helmet'
import Title from '../components/Title'
import HeaderImage from './HeaderImage'
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | MurMurOus" />
    <Title />
    <HeaderImage />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
