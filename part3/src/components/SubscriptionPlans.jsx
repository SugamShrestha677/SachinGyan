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

  const handleSubscribe = async (planId) => {
    try {
      setProcessing(true)
      setSelectedPlan(planId)
      
      // In a real app, this would redirect to a payment gateway
      await api.updateSubscription(planId)
      
      // Show success message or redirect
      alert('Subscription updated successfully!')
    } catch (err) {
      console.error('Subscription failed:', err)
      alert('Subscription failed. Please try again.')
    } finally {
      setProcessing(false)
      setSelectedPlan(null)
    }
  }

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message="Failed to load subscription plans" />

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data?.plans?.map((plan) => (
        <div
          key={plan.id}
          className={`bg-white rounded-lg shadow-md p-6 border-2 ${
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
            onClick={() => handleSubscribe(plan.id)}
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
  )
}

export default SubscriptionPlans