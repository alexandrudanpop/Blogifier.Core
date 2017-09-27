import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BlogsContainer from './BlogsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Blogifier</h2>
        </div>
        <BlogsContainer />
      </div>
    );
  }
}

export default App;
