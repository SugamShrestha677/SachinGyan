const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About EduSphere</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Empowering learners to achieve their personal and professional goals</p>
        </div>
        
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">To make quality education accessible and affordable for everyone, everywhere. We believe that education is the key to unlocking human potential and creating opportunities for growth and development.</p>
            <p className="text-gray-600">We strive to create a learning environment that fosters innovation, creativity, and critical thinking.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">To become the world's leading online learning platform that transforms lives through education. We envision a world where anyone, anywhere can transform their life by accessing the world's best learning experience.</p>
            <p className="text-gray-600">We aim to bridge the gap between education and employment by providing industry-relevant skills.</p>
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">We continuously evolve our teaching methods and curriculum to stay ahead of industry trends.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-gray-600">We believe education should be accessible to everyone, regardless of background or location.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-medal text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">We are committed to maintaining the highest standards in education and student support.</p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
              <p className="text-indigo-600">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold">Priya Sharma</h3>
              <p className="text-indigo-600">Chief Learning Officer</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold">Amit Patel</h3>
              <p className="text-indigo-600">CTO</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold">Sneha Singh</h3>
              <p className="text-indigo-600">Head of Student Success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About