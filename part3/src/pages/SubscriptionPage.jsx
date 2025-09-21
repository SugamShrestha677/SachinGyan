// pages/SubscriptionPage.jsx
import SubscriptionPlans from '../components/SubscriptionPlans'

const SubscriptionPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Select the subscription plan that works best for you and start your learning journey today.
        </p>
      </div>
      
      <SubscriptionPlans />
    </div>
  )
}

export default SubscriptionPage