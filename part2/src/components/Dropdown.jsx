import { useState, useRef, useEffect } from 'react'

const Dropdown = ({ trigger, children, align = 'right', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const alignmentClasses = {
    right: 'right-0',
    left: 'left-0'
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>
      
      {isOpen && (
        <div 
          className={`absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${alignmentClasses[align]}`}
        >
          <div className="py-1">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown

// Example usage:
/*
<Dropdown
  trigger={
    <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
      Options
      <i className="fas fa-chevron-down ml-1 text-xs"></i>
    </button>
  }
>
  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account settings</a>
  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">License</a>
  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
</Dropdown>
*/