import Button from './Button'

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Learn Without Limits</h1>
            <p className="text-lg text-gray-600 mb-8">Start, switch, or advance your career with our courses, certificates, and degrees from world-class universities and companies.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className='p-2.5'>Join For Free</Button>
              <Button variant="outline" className='p-2.5'>Explore Courses</Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="bg-white rounded-xl shadow-lg p-2 transform rotate-2">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <i className="fas fa-graduation-cap text-6xl text-indigo-600 mb-4"></i>
                  <h3 className="text-xl font-bold text-gray-800">Interactive Learning Experience</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero