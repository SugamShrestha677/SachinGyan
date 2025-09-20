import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import Videos from './Videos'
import Notes from './Notes'
import LiveClasses from './LiveClasses'
import Profile from './Profile'

const Dashboard = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
        <Route path="videos" element={<DashboardLayout><Videos /></DashboardLayout>} />
        <Route path="notes" element={<DashboardLayout><Notes /></DashboardLayout>} />
        <Route path="live-classes" element={<DashboardLayout><LiveClasses /></DashboardLayout>} />
        <Route path="profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
      </Routes>
    </>
  )
}

// DashboardHome component for the main dashboard page
const DashboardHome = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, title: 'Full Stack Web Development', progress: 65 },
    { id: 2, title: 'Data Science Fundamentals', progress: 30 },
    { id: 3, title: 'UI/UX Design Masterclass', progress: 80 },
  ])

  const [availableCourses] = useState([
    { id: 4, title: 'React Advanced Patterns', instructor: 'John Doe', duration: '8 weeks', price: '$199' },
    { id: 5, title: 'Node.js Backend Development', instructor: 'Jane Smith', duration: '6 weeks', price: '$149' },
    { id: 6, title: 'Python for Data Science', instructor: 'Mike Johnson', duration: '10 weeks', price: '$249' },
    { id: 7, title: 'AWS Cloud Computing', instructor: 'Sarah Wilson', duration: '12 weeks', price: '$299' },
  ])

  const upcomingClasses = [
    { id: 1, title: 'React Advanced Patterns', time: '10:00 AM', date: 'Tomorrow' },
    { id: 2, title: 'Node.js Backend Development', time: '2:00 PM', date: 'Sep 20' },
  ]

  const enrollInCourse = (course) => {
    const newEnrolledCourse = {
      ...course,
      progress: 0
    }
    setEnrolledCourses([...enrolledCourses, newEnrolledCourse])
    toast.success(`Successfully enrolled in ${course.title}!`)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <i className="fas fa-book-open text-xl"></i>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600">Enrolled Courses</h2>
              <p className="text-2xl font-semibold">{enrolledCourses.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <i className="fas fa-check-circle text-xl"></i>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600">Completed</h2>
              <p className="text-2xl font-semibold">{enrolledCourses.filter(c => c.progress === 100).length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="fas fa-clock text-xl"></i>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600">Hours Learned</h2>
              <p className="text-2xl font-semibold">42</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Course Progress */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">My Courses</h2>
          <div className="space-y-4">
            {enrolledCourses.map(course => (
              <div key={course.id}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{course.title}</span>
                  <span className="text-sm font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Upcoming Live Classes</h2>
          <div className="space-y-4">
            {upcomingClasses.map(classItem => (
              <div key={classItem.id} className="flex items-center p-3 border rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-video text-indigo-600"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">{classItem.title}</h3>
                  <p className="text-sm text-gray-500">{classItem.date} at {classItem.time}</p>
                </div>
                <button className="ml-auto bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Available Courses Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableCourses.map(course => (
            <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-2">Instructor: {course.instructor}</p>
              <p className="text-gray-600 text-sm mb-2">Duration: {course.duration}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-indigo-600">{course.price}</span>
                <button 
                  onClick={() => enrollInCourse(course)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard