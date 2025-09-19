import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LEFT - Logo */}
          <div className="flex-shrink-0">
            <span className="text-indigo-600 text-2xl font-bold">
              EduSphere
            </span>
          </div>

          {/* CENTER - Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/careers"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Careers
            </Link>
          </div>

          {/* RIGHT - Buttons */}
          <div className="flex items-center">
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" className="px-4 py-2">
                Login
              </Button>
              <Button className="px-4 py-2">Sign Up</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} className="cursor-pointer" /> : <Menu size={28} className="cursor-pointer"/>}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/careers"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium"
            >
              Careers
            </Link>

            <div className="pt-4 pb-3 border-t border-gray-200">
              <Button variant="outline" className="w-full p-2.5 mb-2">
                Login
              </Button>
              <Button className="w-full p-2.5">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
