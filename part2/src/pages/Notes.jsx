const Notes = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample note cards */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold">Note Title {item}</h3>
            <p className="text-sm text-gray-600 mt-2">This is a preview of the note content. You can write your notes here and they will be saved for future reference.</p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>Last updated: 2 days ago</span>
              <button className="text-indigo-600 hover:text-indigo-800">Edit</button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
        Create New Note
      </button>
    </div>
  )
}

export default Notes