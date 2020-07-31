import React from 'react';
import './App.css';
import Facebook from './components/Facebook';
import fbLogin from "./services/FbLoginService";


function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Facebook/>
      </header>
    </div>

  );
}

export default App;
