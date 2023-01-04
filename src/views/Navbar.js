import React from 'react'
import { SiKickstarter } from 'react-icons/si'
import {GiPerspectiveDiceSixFacesOne} from 'react-icons/gi'

function Navbar() {
  return (
    <span className="navbar">
      <GiPerspectiveDiceSixFacesOne className='nav-icon'/>
      <h2>Untitled Pattern</h2>
      <SiKickstarter className='nav-icon'/>
    </span>
  )
}

export default Navbar