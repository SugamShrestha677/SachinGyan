// pages/ProfilePage.jsx
import UserProfile from '../components/UserProfile'

const ProfilePage = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Profile</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Manage your account settings and track your learning progress.
        </p>
      </div>
      
      <UserProfile />
    </div>
  )
}

export default ProfilePage