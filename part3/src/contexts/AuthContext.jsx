// contexts/AuthContext.jsx
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  })

  const value = {
    user,
    setUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}