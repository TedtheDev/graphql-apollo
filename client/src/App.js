import React from 'react';
import './App.css';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{gridArea:'header'}}>Apollo and GraphQL</div>
        <Books />
      </header>
    </div>
  );
}

export default App;
