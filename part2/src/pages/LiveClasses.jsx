import DashboardLayout from '../components/dashboard/DashboardLayout'

const LiveClasses = () => {
  const upcomingClasses = [
    { id: 1, title: 'React Advanced Patterns', time: '10:00 AM', date: 'Tomorrow', instructor: 'John Doe' },
    { id: 2, title: 'Node.js Backend Development', time: '2:00 PM', date: 'Sep 20', instructor: 'Jane Smith' },
    { id: 3, title: 'UI/UX Design Principles', time: '4:00 PM', date: 'Sep 22', instructor: 'Alex Johnson' },
  ]

  const pastClasses = [
    { id: 1, title: 'Introduction to React', time: '45:30', date: 'Sep 10', instructor: 'John Doe' },
    { id: 2, title: 'JavaScript Fundamentals', time: '38:15', date: 'Sep 5', instructor: 'Jane Smith' },
  ]

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Live Classes</h1>
        
        <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {upcomingClasses.map(classItem => (
            <div key={classItem.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold">{classItem.title}</h3>
              <p className="text-sm text-gray-600 mt-1">Instructor: {classItem.instructor}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">{classItem.date} at {classItem.time}</span>
                <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4">Past Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastClasses.map(classItem => (
            <div key={classItem.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold">{classItem.title}</h3>
              <p className="text-sm text-gray-600 mt-1">Instructor: {classItem.instructor}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">{classItem.date} • {classItem.time}</span>
                <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                  Watch Recording
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default LiveClasses