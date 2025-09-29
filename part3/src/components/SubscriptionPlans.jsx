// components/SubscriptionPlans.jsx
import { useState } from 'react'
import useApi from '../hooks/useApi'
import { api } from '../services/api'
import Button from './Button'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'

const SubscriptionPlans = () => {
  const { data, loading, error } = useApi(api.getSubscriptionPlans)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [subscriptionResult, setSubscriptionResult] = useState(null)

  const handleSubscribe = async (planId, planName) => {
    try {
      setProcessing(true)
      setSelectedPlan(planId)
      setSubscriptionResult(null)
      
      const result = await api.updateSubscription(planId)
      
      setSubscriptionResult({
        success: true,
        message: `Successfully subscribed to ${planName}!`,
        planName
      })
    } catch (err) {
      console.error('Subscription failed:', err)
      setSubscriptionResult({
        success: false,
        message: 'Subscription failed. Please try again.'
      })
    } finally {
      setProcessing(false)
      setSelectedPlan(null)
    }
  }

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message="Failed to load subscription plans" />

  return (
    <div>
      {subscriptionResult && (
        <div className={`mb-6 p-4 rounded-md ${
          subscriptionResult.success 
            ? 'bg-green-50 border-l-4 border-green-500 text-green-700'
            : 'bg-red-50 border-l-4 border-red-500 text-red-700'
        }`}>
          <div className="flex">
            <div className="flex-shrink-0">
              <i className={`fas ${
                subscriptionResult.success ? 'fa-check-circle' : 'fa-exclamation-circle'
              }`}></i>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{subscriptionResult.message}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.plans?.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white rounded-lg shadow-md p-6 border-2 transform transition-all duration-300 hover:scale-105 ${
              plan.isPopular ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-50' : 'border-gray-200'
            }`}
          >
            {plan.isPopular && (
              <div className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-500">/{plan.interval}</span>
            </div>
            
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button
              className="w-full"
              disabled={processing && selectedPlan === plan.id}
              onClick={() => handleSubscribe(plan.id, plan.name)}
            >
              {processing && selectedPlan === plan.id ? (
                <>
                  <i className="fas fa-spinner animate-spin mr-2"></i>
                  Processing...
                </>
              ) : (
                plan.cta
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubscriptionPlans