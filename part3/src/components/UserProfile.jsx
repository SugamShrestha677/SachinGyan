// components/UserProfile.jsx
import useApi from '../hooks/useApi'
import { api } from '../services/api'
import { useAuth } from '../contexts/AuthContext'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'

const UserProfile = () => {
  const { user } = useAuth()
  const { data: userProfile, loading, error, execute: refreshProfile } = useApi(api.getUserProfile)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getSubscriptionStatus = (subscription) => {
    if (!subscription) return 'No active subscription'
    
    const now = new Date()
    const endDate = new Date(subscription.currentPeriodEnd)
    
    if (subscription.status === 'active') {
      if (endDate > now) {
        return `Active until ${formatDate(subscription.currentPeriodEnd)}`
      } else {
        return 'Expired'
      }
    }
    
    return subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)
  }

  const getSubscriptionBadgeColor = (subscription) => {
    if (!subscription) return 'bg-gray-100 text-gray-800'
    
    if (subscription.status === 'active') {
      const endDate = new Date(subscription.currentPeriodEnd)
      const now = new Date()
      
      if (endDate > now) {
        return 'bg-green-100 text-green-800'
      } else {
        return 'bg-yellow-100 text-yellow-800'
      }
    }
    
    return 'bg-gray-100 text-gray-800'
  }

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message="Failed to load profile data" onRetry={refreshProfile} />

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl">
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center">
          <i className="fas fa-user text-3xl text-indigo-600"></i>
        </div>
        <div className="ml-6">
          <h2 className="text-xl font-semibold">{userProfile?.name || user?.name}</h2>
          <p className="text-gray-600">{userProfile?.email || user?.email}</p>
          {userProfile?.company && (
            <p className="text-sm text-gray-500">{userProfile.company}</p>
          )}
        </div>
      </div>

      {/* Subscription Status */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Subscription Status</h3>
        <div className="flex items-center">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSubscriptionBadgeColor(userProfile?.subscription)}`}>
            {getSubscriptionStatus(userProfile?.subscription)}
          </span>
          
          {userProfile?.subscription?.plan && (
            <span className="ml-3 text-gray-600">
              {userProfile.subscription.plan.name} (${userProfile.subscription.plan.price}/{userProfile.subscription.plan.interval})
            </span>
          )}
        </div>
        
        {userProfile?.subscription?.status === 'active' && (
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Manage Subscription
          </button>
        )}
      </div>

      {/* Account Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Account Details</h3>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="text-gray-600">{userProfile?.name || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="text-gray-600">{userProfile?.email || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Member since</label>
              <p className="text-gray-600">{userProfile?.joinedDate ? formatDate(userProfile.joinedDate) : 'N/A'}</p>
            </div>
            {userProfile?.website && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Website</label>
                <a href={userProfile.website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                  {userProfile.website}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Learning Stats */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Learning Stats</h3>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Courses enrolled</label>
              <p className="text-gray-600">{userProfile?.coursesEnrolled || 0}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Courses completed</label>
              <p className="text-gray-600">{userProfile?.coursesCompleted || 0}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total learning time</label>
              <p className="text-gray-600">{userProfile?.totalLearningTime || '0 hours'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Completion rate</label>
              <p className="text-gray-600">
                {userProfile?.coursesEnrolled ? 
                  Math.round((userProfile.coursesCompleted / userProfile.coursesEnrolled) * 100) : 0
                }%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile