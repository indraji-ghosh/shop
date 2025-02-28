import React from 'react'
import Topbar from '../layout/Topbar'
import Navbar from './Navbar'
function Header() {
  return (
    <header className="border-gray-200 border-b">
    <Topbar/>
    <Navbar/>
    </header>
  )
}

export default Header