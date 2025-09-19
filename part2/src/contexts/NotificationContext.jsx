// contexts/NotificationContext.jsx
import { createContext, useContext, useState } from 'react'

const NotificationContext = createContext()

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const addNotification = (message, type = 'info') => {
    const id = Date.now()
    const notification = { id, message, type }
    
    setNotifications(prev => [...prev, notification])
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(id)
    }, 5000)
  }

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }

  const value = {
    notifications,
    addNotification,
    removeNotification
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

// components/Notification.jsx
import { useNotification } from '../contexts/NotificationContext'

const Notification = () => {
  const { notifications, removeNotification } = useNotification()

  if (notifications.length === 0) return null

  const getBgColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-100 border-green-400 text-green-700'
      case 'error': return 'bg-red-100 border-red-400 text-red-700'
      case 'warning': return 'bg-yellow-100 border-yellow-400 text-yellow-700'
      default: return 'bg-blue-100 border-blue-400 text-blue-700'
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 w-80">
      {notifications.map(notification => (
        <div 
          key={notification.id}
          className={`border-l-4 p-4 rounded-md shadow-md ${getBgColor(notification.type)}`}
        >
          <div className="flex justify-between items-start">
            <p>{notification.message}</p>
            <button 
              onClick={() => removeNotification(notification.id)}
              className="text-lg font-semibold"
            >
              &times;
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Notification