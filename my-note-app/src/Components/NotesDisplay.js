

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NoteCard from './NoteCard';
import "./Calendar.css"

function NotesDisplay() {
  const [notes, setNotes] = useState([]);
  const reduxNotes = useSelector((state) => state.notes);

  useEffect(() => {
    
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  return (
    <div className='notes'>
      <h2>Notes</h2>
      <div>
        {notes
          .concat(reduxNotes) 
          .sort((a, b) => b.timestamp - a.timestamp) 
          .map((note, index) => (
            <NoteCard key={index} note={note} />
          ))}
      </div>
    </div>
  );
}

export default NotesDisplay;
