// pages/CoursesPage.jsx
import CourseList from '../components/CourseList'

const CoursesPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Courses</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our wide range of courses designed to help you achieve your learning goals.
        </p>
      </div>
      
      <CourseList />
    </div>
  )
}

export default CoursesPage