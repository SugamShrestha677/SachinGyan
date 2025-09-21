// services/api.js
// Mock API endpoints - in a real app, these would be actual API URLs
const API_BASE_URL = 'https://api.example.com'

// Helper function for API calls
const fetchApi = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  if (config.body) {
    config.body = JSON.stringify(config.body)
  }

  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Mock responses based on endpoint
    let mockResponse = {}
    
    switch (endpoint) {
      case '/subscription-plans':
        mockResponse = {
          plans: [
            {
              id: 1,
              name: "Basic Plan",
              description: "Perfect for beginners",
              price: 9.99,
              interval: "month",
              features: ["Access to basic courses", "Community support", "Limited downloads"],
              isPopular: false,
              cta: "Get Started"
            },
            {
              id: 2,
              name: "Pro Plan",
              description: "For serious learners",
              price: 19.99,
              interval: "month",
              features: ["All courses", "Priority support", "Unlimited downloads", "Certificates"],
              isPopular: true,
              cta: "Most Popular"
            },
            {
              id: 3,
              name: "Annual Plan",
              description: "Best value",
              price: 199,
              interval: "year",
              features: ["All courses", "24/7 support", "Unlimited downloads", "Certificates", "Offline access"],
              isPopular: false,
              cta: "Save 20%"
            }
          ]
        }
        break
        
      case '/courses':
        const page = new URLSearchParams(endpoint.split('?')[1]).get('page') || 1
        const limit = new URLSearchParams(endpoint.split('?')[1]).get('limit') || 10
        
        const courses = []
        for (let i = 0; i < limit; i++) {
          const id = (page - 1) * limit + i + 1
          courses.push({
            id,
            title: `Course ${id}`,
            description: `This is a description for course ${id}. Learn valuable skills and advance your career.`,
            duration: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 60)}m`,
            level: ["Beginner", "Intermediate", "Advanced"][Math.floor(Math.random() * 3)],
            rating: (Math.random() * 2 + 3).toFixed(1),
            students: Math.floor(Math.random() * 1000) + 100
          })
        }
        
        mockResponse = {
          courses,
          currentPage: parseInt(page),
          totalPages: 5,
          totalCourses: 50
        }
        break
        
      case '/user/profile':
        mockResponse = {
          name: "John Doe",
          email: "john@example.com",
          joinedDate: "2023-01-15",
          subscription: {
            status: "active",
            plan: {
              id: 2,
              name: "Pro Plan",
              price: 19.99,
              interval: "month"
            },
            currentPeriodEnd: "2023-12-15"
          },
          coursesEnrolled: 12,
          coursesCompleted: 8,
          totalLearningTime: "45 hours"
        }
        break
        
      case '/user/subscription':
        mockResponse = { success: true }
        break
        
      default:
        mockResponse = { error: "Endpoint not found" }
    }
    
    return mockResponse
  } catch (error) {
    console.error('API call failed:', error)
    throw error
  }
}

// API functions
export const api = {
  // Subscription plans
  getSubscriptionPlans: () => fetchApi('/subscription-plans'),
  
  // Courses
  getCourses: (page = 1, limit = 10) => 
    fetchApi(`/courses?page=${page}&limit=${limit}`),
  
  // User profile and subscription status
  getUserProfile: () => fetchApi('/user/profile'),
  
  // Update subscription
  updateSubscription: (planId) => 
    fetchApi('/user/subscription', {
      method: 'POST',
      body: { planId },
    }),
}