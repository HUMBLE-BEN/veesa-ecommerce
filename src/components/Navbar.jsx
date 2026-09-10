/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/vessa-logo.svg'
import cartIcon from'../assets/icon-cart.svg' 
import searchIcon from '../assets/icon-search.svg'
import userIcon from '../assets/icon-users.svg'

function Navbar() {
  return (
  <nav className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-16">
    <img src={logo} alt="Veesa Logo" className="w-32" />

    <div className="hidden md:flex gap-6">
        <a href="/">Home</a>
        <a href="/product">Shop</a>
        <a href="/story">our story</a>
        <a href="/collections">Collections</a>
        <a href="/blog">Blog</a>
        <a href="/reviews"> Reviews</a>
        <a href="/contact">Contact</a>
    </div>

    <div className="flex items-center gap-4">
        <img src={searchIcon} alt="Search Icon" className="w-5" />
        <img src={cartIcon} alt="Cart Icon" className="w-5" />
        <img src={userIcon} alt="User Icon" className="w-5" />
        <button className="md:hidden text-2x1">
             ☰
        </button>
    </div>

    
  </nav>
      
  
  )
}

export default Navbar


