import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load user from localStorage on app start
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    
    if (token && userData) {
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Fake API call
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({
          data: {
            user: { id: 1, name: 'John Doe', email },
            token: 'fake-jwt-token'
          }
        }), 1000)
      )
      
      setUser(response.data.user)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      
      return { success: true }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  const signup = async (userData) => {
    try {
      // Fake API call
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({
          data: {
            user: { id: 1, name: userData.name, email: userData.email },
            token: 'fake-jwt-token'
          }
        }), 1000)
      )
      
      setUser(response.data.user)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      
      return { success: true }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
