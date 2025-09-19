import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from './Button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-indigo-600 text-2xl font-bold">EduSphere</Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium ${isActive('/') ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 text-sm font-medium ${isActive('/about') ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              >
                About
              </Link>
              <Link 
                to="/careers" 
                className={`px-3 py-2 text-sm font-medium ${isActive('/careers') ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              >
                Careers
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">
                  <i className="fas fa-user-circle text-xl"></i>
                  <span className="ml-1">{user.name}</span>
                </Link>
                <Button variant="outline" onClick={handleLogout} className="px-4 py-2">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="hidden md:ml-4 md:flex md:items-center space-x-3">
                <Link to="/login">
                  <Button variant="outline" className="px-4 py-2">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="px-4 py-2">Sign Up</Button>
                </Link>
              </div>
            )}
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
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/about') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/careers" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/careers') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              Careers
            </Link>
            
            {user ? (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link 
                  to="/dashboard" 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    handleLogout()
                    toggleMenu()
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link 
                  to="/login" 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 mb-2"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar