import { useNotification } from '../contexts/NotificationContext'

const Notification = () => {
  const { notifications, removeNotification } = useNotification()

  if (notifications.length === 0) return null

  const getNotificationStyles = (type) => {
    const baseStyles = 'border-l-4 p-4 rounded-md shadow-md flex justify-between items-start'
    
    switch (type) {
      case 'success':
        return `${baseStyles} bg-green-50 border-green-400 text-green-700`
      case 'error':
        return `${baseStyles} bg-red-50 border-red-400 text-red-700`
      case 'warning':
        return `${baseStyles} bg-yellow-50 border-yellow-400 text-yellow-700`
      case 'info':
        return `${baseStyles} bg-blue-50 border-blue-400 text-blue-700`
      default:
        return `${baseStyles} bg-gray-50 border-gray-400 text-gray-700`
    }
  }

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return 'fas fa-check-circle'
      case 'error':
        return 'fas fa-exclamation-circle'
      case 'warning':
        return 'fas fa-exclamation-triangle'
      case 'info':
        return 'fas fa-info-circle'
      default:
        return 'fas fa-bell'
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 w-80">
      {notifications.map(notification => (
        <div 
          key={notification.id}
          className={getNotificationStyles(notification.type)}
          role="alert"
        >
          <div className="flex items-start">
            <i className={`${getIcon(notification.type)} mt-1 mr-3 text-lg`}></i>
            <div>
              <p className="font-medium">{notification.title || notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}</p>
              <p className="text-sm mt-1">{notification.message}</p>
            </div>
          </div>
          <button 
            onClick={() => removeNotification(notification.id)}
            className="text-gray-500 hover:text-gray-700 ml-4"
            aria-label="Close notification"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      ))}
    </div>
  )
}

export default Notification