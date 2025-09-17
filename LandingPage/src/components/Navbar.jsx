import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-indigo-600 text-2xl font-bold">EduSphere</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">About</Link>
              <Link to="/careers" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Careers</Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-4 md:flex md:items-center space-x-3">
              <Button variant="outline" className="px-4 py-2">Login</Button>
              <Button className="px-4 py-2">Sign Up</Button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium">About</Link>
            <Link to="/careers" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium">Careers</Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Button variant="outline" className="w-full mb-2">Login</Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar