import logo from './logo.svg';
import './App.css';
import Calendar from './Components/Calendar';
import React from 'react';
import './App.css';
import NoteForm from './Components/NoteForm';
import NotesDisplay from './Components/NotesDisplay';

function App() {
  return (
    <div className="App">
      <br/>
      <h1>Note-taking App</h1>
      <div className='mainbox'>
      <NoteForm />
      <NotesDisplay />
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default App;