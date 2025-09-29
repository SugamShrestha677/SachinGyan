// components/CourseList.jsx
import { useState, useMemo } from 'react'
import { useSwrApi } from '../hooks/useApi'
import { api } from '../services/api'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'

// Lazy loaded image component
const LazyImage = ({ src, alt, className }) => {
  return (
    <img
      data-src={src}
      alt={alt}
      className={`lazyload ${className}`}
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    />
  )
}

// Course item component
const CourseItem = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-100 overflow-hidden">
        <LazyImage 
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>
        
        {course.topics && (
          <div className="mb-3 flex flex-wrap gap-1">
            {course.topics.slice(0, 3).map((topic, idx) => (
              <span 
                key={idx}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>{course.duration}</span>
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
            {course.level}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-400 mr-1"></i>
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          <span className="text-sm text-gray-500">{course.students.toLocaleString()} students</span>
        </div>
        
        {course.url && (
          <a 
            href={course.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 block text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm"
          >
            View Course
          </a>
        )}
      </div>
    </div>
  )
}

const CourseList = () => {
  const [page, setPage] = useState(1)
  
  const { data, loading, error, isValidating } = useSwrApi(
    `courses-page-${page}`,
    api.getCourses,
    { args: [page, 9] }
  )

  const courses = useMemo(() => data?.courses || [], [data?.courses])

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= data?.totalPages) {
      setPage(newPage)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (loading && page === 1) return <LoadingSpinner />
  if (error) return <ErrorMessage message="Failed to load courses. Please try again later." />

  return (
    <div>
      <div className="mb-4 text-sm text-gray-600">
        Showing {courses.length} of {data?.totalCourses || 0} courses
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
      
      {/* Pagination */}
      {data?.totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(5, data.totalPages) }, (_, i) => {
            let pageNum
            if (data.totalPages <= 5) {
              pageNum = i + 1
            } else if (page <= 3) {
              pageNum = i + 1
            } else if (page >= data.totalPages - 2) {
              pageNum = data.totalPages - 4 + i
            } else {
              pageNum = page - 2 + i
            }
            
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                  page === pageNum
                    ? 'border-indigo-500 bg-indigo-500 text-white'
                    : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </button>
            )
          })}
          
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === data.totalPages}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
      
      {(loading || isValidating) && page > 1 && (
        <div className="flex justify-center items-center mt-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
          <span className="ml-2 text-sm text-gray-600">Loading more courses...</span>
        </div>
      )}
    </div>
  )
}

export default CourseList