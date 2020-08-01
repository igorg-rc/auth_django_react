import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookSocialAuth from './components/Facebook';
import fbLogin from './services/fbLogin';

class App extends Component {
  render() {
    return (
      <div className="App">
        < FacebookSocialAuth />
      </div>
    );
  }
}

export default App;


