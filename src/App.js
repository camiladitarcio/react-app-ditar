import React from 'react';
import List from './components/list';
import Button from './components/button';
import './App.css';

function App() {
  const handleClick = () => alert('Me clickeasteeeee')
  return (
    <div className="container">
      <List />
      <Button onClick={handleClick}>
        Presioname
      </Button>
    </div>
  )
};

export default App;
