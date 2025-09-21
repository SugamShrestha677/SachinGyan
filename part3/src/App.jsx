// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import SubscriptionPage from './pages/SubscriptionPage'
import CoursesPage from './pages/CoursesPage'
import ProfilePage from './pages/ProfilePage'
import './index.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/" element={<SubscriptionPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App