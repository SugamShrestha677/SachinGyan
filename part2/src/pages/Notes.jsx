import { useState, useEffect } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Create a new note
  const createNewNote = () => {
    if (newNoteTitle.trim() === '') return;
    
    const newNote = {
      id: Date.now(),
      title: newNoteTitle,
      content: newNoteContent,
      lastUpdated: new Date().toLocaleDateString()
    };
    
    setNotes([...notes, newNote]);
    setNewNoteTitle('');
    setNewNoteContent('');
  };

  // Start editing a note
  const startEditing = (note) => {
    setEditingNoteId(note.id);
    setNewNoteTitle(note.title);
    setNewNoteContent(note.content);
  };

  // Save edited note
  const saveEditedNote = () => {
    if (newNoteTitle.trim() === '') return;
    
    setNotes(notes.map(note => 
      note.id === editingNoteId 
        ? {...note, title: newNoteTitle, content: newNoteContent, lastUpdated: new Date().toLocaleDateString()}
        : note
    ));
    
    setEditingNoteId(null);
    setNewNoteTitle('');
    setNewNoteContent('');
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingNoteId(null);
    setNewNoteTitle('');
    setNewNoteContent('');
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Notes</h1>
      
      {/* Create/Edit Note Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">
          {editingNoteId ? 'Edit Note' : 'Create New Note'}
        </h2>
        
        <div className="mb-4">
          <label htmlFor="note-title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="note-title"
            type="text"
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter note title"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="note-content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="note-content"
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter note content"
          ></textarea>
        </div>
        
        <div className="flex space-x-2">
          {editingNoteId ? (
            <>
              <button
                onClick={saveEditedNote}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Save Changes
              </button>
              <button
                onClick={cancelEditing}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={createNewNote}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Create Note
            </button>
          )}
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div key={note.id} className="bg-white rounded-lg shadow-md p-4">
            {editingNoteId === note.id ? (
              <div className="animate-pulse bg-indigo-50 p-2 rounded">
                <div className="h-6 bg-indigo-100 rounded mb-2"></div>
                <div className="h-4 bg-indigo-100 rounded mb-2"></div>
                <div className="h-4 bg-indigo-100 rounded w-3/4"></div>
              </div>
            ) : (
              <>
                <h3 className="font-semibold text-lg mb-2">{note.title}</h3>
                <p className="text-sm text-gray-600 mb-4 whitespace-pre-line">
                  {note.content.length > 100 
                    ? `${note.content.substring(0, 100)}...` 
                    : note.content
                  }
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>Last updated: {note.lastUpdated}</span>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => startEditing(note)}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => deleteNote(note.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        
        {notes.length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500">
            <i className="fas fa-sticky-note text-4xl mb-3 text-gray-300"></i>
            <p>No notes yet. Create your first note above!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;