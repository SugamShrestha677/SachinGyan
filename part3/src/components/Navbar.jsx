// components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const location = useLocation()
  const { user } = useAuth()

  const isActive = (path) => {
    return location.pathname === path
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
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium ${isActive('/') ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              >
                Subscription
              </Link>
              <Link 
                to="/courses" 
                className={`px-3 py-2 text-sm font-medium ${isActive('/courses') ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              >
                Courses
              </Link>
              <Link 
                to="/profile" 
                className={`px-3 py-2 text-sm font-medium ${isActive('/profile') ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <span className="text-gray-700">{user?.name}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar