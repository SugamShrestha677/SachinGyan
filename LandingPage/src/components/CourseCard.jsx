import Button from './Button'

const CourseCard = ({ title, description, duration, level, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
        <i className="fas fa-laptop-code text-5xl text-blue-600"></i>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">{level}</span>
          <span className="text-gray-500 text-sm"><i className="far fa-clock mr-1"></i> {duration}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline" className="w-full">Learn More</Button>
      </div>
    </div>
  )
}

export default CourseCard