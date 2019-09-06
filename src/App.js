import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import WorkView from './Components/Work/Work-view';
class App extends Component {
  render() {
    return (
      <Router>
        <Home />
        <About></About>
        <WorkView></WorkView>
      </Router>
    );
  }
}
export default App;
