// components/CourseList.jsx
import { useState } from 'react'
import useApi from '../hooks/useApi'
import { api } from '../services/api'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'

const CourseList = () => {
  const [page, setPage] = useState(1)
  const { data, loading, error, execute } = useApi(() => api.getCourses(page, 9), false)
  
  // Load courses when page changes
  useState(() => {
    execute()
  }, [page])

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= data?.totalPages) {
      setPage(newPage)
      window.scrollTo(0, 0)
    }
  }

  if (loading && page === 1) return <LoadingSpinner />
  if (error) return <ErrorMessage message="Failed to load courses" onRetry={execute} />

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {data?.courses?.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
              <i className="fas fa-book text-5xl text-blue-600"></i>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{course.duration}</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                  {course.level}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  <span className="text-sm">{course.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{course.students} students</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      {data?.totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {Array.from({ length: data.totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-4 py-2 border rounded-md text-sm font-medium ${
                page === pageNum
                  ? 'border-indigo-500 bg-indigo-500 text-white'
                  : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
              }`}
            >
              {pageNum}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === data.totalPages}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
      
      {loading && page > 1 && (
        <div className="flex justify-center items-center mt-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
        </div>
      )}
    </div>
  )
}

export default CourseList