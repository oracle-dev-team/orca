import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar/Navbar';
import InfluenceMap from './containers/InfluenceMap/InfluenceMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <InfluenceMap />
      </div>
    );
  }
}

export default App;
