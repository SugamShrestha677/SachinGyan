import { useState } from 'react'
import Button from '../components/Button'

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    alert('Application submitted successfully!')
  }

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description: "We are looking for a skilled Frontend Developer to join our team to help build engaging learning experiences."
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      type: "Full-time",
      location: "New Delhi",
      description: "Join our design team to create intuitive and beautiful interfaces for our learning platform."
    },
    {
      id: 3,
      title: "Content Creator",
      department: "Education",
      type: "Contract",
      location: "Remote",
      description: "Create engaging educational content for our courses across various domains."
    },
    {
      id: 4,
      title: "Student Success Manager",
      department: "Operations",
      type: "Full-time",
      location: "Bangalore",
      description: "Help our students achieve their learning goals and ensure their success with our platform."
    }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Help us transform education and make learning accessible to everyone</p>
        </div>
        
        {/* Job Openings */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Current Openings</h2>
          <div className="grid grid-cols-1 gap-6">
            {jobOpenings.map(job => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{job.department}</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{job.type}</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{job.location}</span>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0 p-2.5">Apply Now</Button>
                </div>
                <p className="text-gray-600 mt-4">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Application Form */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for a Position</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select a position</option>
                  {jobOpenings.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6">
              <Button type="submit" className='p-2.5'>Submit Application</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Careers