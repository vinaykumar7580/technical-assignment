import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../Redux/notesSlice';
import Calendar from './Calendar'; 

function NoteForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const dispatch = useDispatch();

  const handleNoteSubmit = () => {
    const newNote = {
      title,
      body,
      timestamp: selectedDate ? selectedDate.getTime() : new Date().getTime(),
    };

    
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    storedNotes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(storedNotes));

    
    dispatch(addNote(newNote));

 
    setTitle('');
    setBody('');
    setSelectedDate(null);
  };

  return (
    <div className='noteform'>
      <h2>Add a Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      <br/>
      <textarea
        placeholder="Body Content"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <br/>
      <br/>
       <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
       <br/>
       <br/>
      <button onClick={handleNoteSubmit}>Submit</button>
    </div>
  );
}

export default NoteForm;