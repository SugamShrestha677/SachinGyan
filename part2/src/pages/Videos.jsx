const Videos = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Video Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample video cards */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <i className="fas fa-play-circle text-4xl text-gray-400"></i>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Video Title {item}</h3>
              <p className="text-sm text-gray-600 mt-1">Description of the video content</p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span>45:30</span>
                <span className="mx-2">•</span>
                <span>2 weeks ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos