import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
// import { useNotification } from '../contexts/NotificationContext'
import Button from '../components/Button'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  
  const { signup, user, loading: authLoading } = useAuth()
  // const { addNotification } = useNotification()
  const navigate = useNavigate()

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  // Show loading if auth is still loading
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setLoading(true)
    const result = await signup(formData)
    setLoading(false)
    
    if (result.success) {
      addNotification('Account created successfully!', { type: 'success' })
      navigate('/dashboard')
    } else {
      addNotification(result.message || 'Signup failed. Please try again.', { type: 'error' })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4">
            <span className="text-indigo-600 text-2xl font-bold">ES</span>
          </div>
          <h1 className="text-3xl font-light text-gray-800">Create your account</h1>
          <p className="mt-2 text-gray-500">Join us to start your learning journey</p>
        </div>
        
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className={`relative rounded-md transition-all duration-200 ${focusedField === 'name' ? 'ring-2 ring-indigo-500 ring-opacity-50' : ''}`}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                />
              </div>
              {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className={`relative rounded-md transition-all duration-200 ${focusedField === 'email' ? 'ring-2 ring-indigo-500 ring-opacity-50' : ''}`}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                />
              </div>
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className={`relative rounded-md transition-all duration-200 ${focusedField === 'password' ? 'ring-2 ring-indigo-500 ring-opacity-50' : ''}`}>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
                />
              </div>
              {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className={`relative rounded-md transition-all duration-200 ${focusedField === 'confirmPassword' ? 'ring-2 ring-indigo-500 ring-opacity-50' : ''}`}>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => handleFocus('confirmPassword')}
                  onBlur={handleBlur}
                />
              </div>
              {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <Link to="/terms" className="text-indigo-600 hover:text-indigo-500">
                  Terms and Conditions
                </Link>
              </label>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full py-3 text-base font-medium"
                disabled={loading}
                loading={loading}
              >
                {loading ? 'Creating account...' : 'Create account'}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* App Download Links (optional) */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 mb-3">Get the app</p>
          <div className="flex justify-center space-x-4">
            <button className="p-2 bg-black rounded text-white text-xs">
              <span className="flex items-center">
                <i className="fab fa-apple mr-1"></i>
                App Store
              </span>
            </button>
            <button className="p-2 bg-black rounded text-white text-xs">
              <span className="flex items-center">
                <i className="fab fa-google-play mr-1"></i>
                Play Store
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup