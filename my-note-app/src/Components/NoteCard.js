
import React from 'react';
import "./Calendar.css";

function NoteCard({ note }) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>Timestamp: {new Date(note.timestamp).toLocaleString()}</p>
    </div>
  );
}

export default NoteCard;