// pages/Dashboard.jsx
import DashboardLayout from '../components/DashboardLayout'
import ProgressBar from '../components/ProgressBar'

const Dashboard = () => {
  const enrolledCourses = [
    { id: 1, title: 'Full Stack Web Development', progress: 65 },
    { id: 2, title: 'Data Science Fundamentals', progress: 30 },
    { id: 3, title: 'UI/UX Design Masterclass', progress: 80 },
  ]

  const upcomingClasses = [
    { id: 1, title: 'React Advanced Patterns', time: '10:00 AM', date: 'Tomorrow' },
    { id: 2, title: 'Node.js Backend Development', time: '2:00 PM', date: 'Sep 20' },
  ]

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <i className="fas fa-book-open text-xl"></i>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600">Enrolled Courses</h2>
              <p className="text-2xl font-semibold">3</p>
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
              <p className="text-2xl font-semibold">1</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Progress */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Course Progress</h2>
          <div className="space-y-4">
            {enrolledCourses.map(course => (
              <div key={course.id}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{course.title}</span>
                  <span className="text-sm font-medium">{course.progress}%</span>
                </div>
                <ProgressBar progress={course.progress} />
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
    </DashboardLayout>
  )
}

export default Dashboard