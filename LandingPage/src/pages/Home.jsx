import Hero from '../components/Hero'
import CourseCard from '../components/CourseCard'
import Button from '../components/Button'
import dataScience from "../assets/dataScience.jpeg"
import ui from "../assets/UI.jpg"
import fullStack from "../assets/fullStack.jpg"
import digitalMarketing from "../assets/digitalMarketing.jpg"

const Home = () => {
  const courses = [
    {
      id: 1,
      image:fullStack,
      title: "Full Stack Web Development",
      description: "Learn to build modern web applications from frontend to backend.",
      duration: "12 weeks",
      level: "Intermediate"
    },
    {
      id: 2,
      image:dataScience,
      title: "Data Science Fundamentals",
      description: "Master data analysis, visualization, and machine learning basics.",
      duration: "10 weeks",
      level: "Beginner"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      image:ui,
      description: "Create stunning user interfaces and enhance user experiences. Create your Own design.",
      duration: "8 weeks",
      level: "Advanced"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      image:digitalMarketing,
      description: "Learn to create effective digital marketing campaigns. Market like Professionals.",
      duration: "6 weeks",
      level: "Beginner"
    }
  ]

  return (
    <div>
      <Hero />
      
      {/* Course Offerings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Course Offerings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover a range of free learning content designed to help your business or career grow.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className='p-2.5'>View All Courses</Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EduSphere?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We provide the best learning experience for our students.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-tie text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop-code text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hands-on Projects</h3>
              <p className="text-gray-600">Gain practical experience with real-world projects.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-briefcase text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Support</h3>
              <p className="text-gray-600">Get help with job placement and career advancement.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-3xl mx-auto">Join thousands of students who have transformed their careers with our courses.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-white p-2.5 text-indigo-600 hover:bg-indigo-50">Sign Up Now</Button>
            <Button className="border-white text-white p-2.5 bg-indigo-800">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home