import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useNotification } from '../contexts/NotificationContext'
import Button from '../components/Button'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [focusedField, setFocusedField] = useState(null)
  
  // const { addNotification } = useNotification()

  const handleFocus = () => {
    setFocusedField('email')
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setError('Email is required')
      return
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setLoading(true)
    setError('')
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage('Password reset instructions have been sent to your email')
      addNotification('Password reset email sent! Check your inbox.', { type: 'success' })
    } catch (error) {
      setError('Failed to send reset instructions')
      addNotification('Failed to send reset email. Please try again.', { type: 'error' })
    } finally {
      setLoading(false)
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
          <h1 className="text-3xl font-light text-gray-800">Reset your password</h1>
          <p className="mt-2 text-gray-500">Enter your email to receive reset instructions</p>
        </div>
        
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            {message && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-green-400"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">{message}</p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <Button
                type="submit"
                className="w-full py-3 text-base font-medium"
                disabled={loading}
                loading={loading}
              >
                {loading ? 'Sending...' : 'Send reset instructions'}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Return to sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Need more help?{' '}
            <Link to="/contact" className="font-medium text-indigo-600 hover:text-indigo-500">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword