import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='text-5xl'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header