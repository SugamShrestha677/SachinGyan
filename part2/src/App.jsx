import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { NotificationProvider } from './contexts/NotificationContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Notification from './components/Notification'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Dashboard from './pages/Dashboard'

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}



const App = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/dashboard/*" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/*" element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/careers" element={<Careers />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
            </Routes>
            <Notification />
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App