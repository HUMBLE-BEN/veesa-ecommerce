import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/vessa-logo.svg'
import cartIcon from '../assets/icon-cart.svg'
import searchIcon from '../assets/icon-search.svg'
import userIcon from '../assets/icon-users.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navbarLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'Our Story', path: '/story' },
    { name: 'Collections', path: '/collections' },
    { name: 'Blog', path: '/blog' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="shadow-md">
      <div className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <img src={logo} alt="Veesa Logo" className="w-32" />

        <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          {navbarLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-black">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <img src={searchIcon} alt="Search Icon" className="w-5 cursor-pointer" />
          <img src={cartIcon} alt="Cart Icon" className="w-5 cursor-pointer" />
          <img src={userIcon} alt="User Icon" className="w-5 cursor-pointer" />

          <button
            className="md:hidden text-2xl font-bold focus:outline-none ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 border-t border-gray-100">
          {navbarLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-black">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar


