// services/api.js
// Using free public APIs that don't require API keys

const COURSES_API = 'https://api.sampleapis.com/codingresources/codingResources'
const USERS_API = 'https://jsonplaceholder.typicode.com/users'

// Helper function for real API calls
const fetchApi = async (url, options = {}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API call failed:', error)
    throw error
  }
}

// Real API functions using free public APIs
export const api = {
  // Get subscription plans (using JSONPlaceholder users as example)
  getSubscriptionPlans: () => fetchApi(USERS_API).then(users => ({
    plans: users.slice(0, 3).map((user, index) => ({
      id: user.id,
      name: `${user.name}'s Learning Plan`,
      description: `Premium learning experience by ${user.company?.name || 'Expert Instructors'}`,
      price: [9.99, 19.99, 29.99][index],
      interval: 'month',
      features: [
        'Access to all courses',
        'Certificate of completion', 
        'Priority support',
        'Offline downloads',
        'Project feedback'
      ],
      isPopular: index === 1,
      cta: index === 1 ? 'Most Popular' : 'Get Started'
    }))
  })),
  
  // Get real courses from SampleAPIs
  getCourses: (page = 1, limit = 9) => 
    fetchApi(COURSES_API).then(courses => {
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const paginatedCourses = courses.slice(startIndex, endIndex)
      
      return {
        courses: paginatedCourses.map((course, index) => ({
          id: course.id || index + 1,
          title: course.name || `Programming Course ${index + 1}`,
          description: course.description || course.topics?.join(', ') || 'Learn valuable programming skills and advance your career.',
          duration: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 60)}m`,
          level: ['Beginner', 'Intermediate', 'Advanced'][index % 3],
          rating: (Math.random() * 2 + 3).toFixed(1),
          students: Math.floor(Math.random() * 1000) + 100,
          url: course.url,
          topics: course.topics || ['Programming', 'Development'],
          thumbnail: `https://picsum.photos/400/300?random=${course.id || index}`
        })),
        currentPage: page,
        totalPages: Math.ceil(courses.length / limit),
        totalCourses: courses.length
      }
    }),
  
  // Get user profile from JSONPlaceholder
  getUserProfile: () => fetchApi(`${USERS_API}/1`).then(user => ({
    name: user.name,
    email: user.email,
    joinedDate: '2023-01-15',
    subscription: {
      status: 'active',
      plan: {
        id: 2,
        name: "Pro Plan",
        price: 19.99,
        interval: "month"
      },
      currentPeriodEnd: '2024-12-15'
    },
    coursesEnrolled: Math.floor(Math.random() * 20) + 5,
    coursesCompleted: Math.floor(Math.random() * 15) + 3,
    totalLearningTime: `${Math.floor(Math.random() * 100) + 20} hours`,
    website: user.website,
    company: user.company?.name
  })),
  
  // Update subscription (mock for demo - in real app this would be a POST)
  updateSubscription: (planId) => 
    new Promise(resolve => 
      setTimeout(() => resolve({ 
        success: true, 
        message: 'Subscription updated successfully!',
        planId 
      }), 1500)
    )
}