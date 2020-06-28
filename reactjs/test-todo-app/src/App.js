import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <div className="control">
        <Button variant="contained" color="primary">
          Ajouter un todo
        </Button>
        <Button variant="contained" color="primary">
          Supprimer un todo
        </Button>

      </div>
      <div className="filter"></div>
      <div className="result"></div>
    </div>
  );
}

export default App;
