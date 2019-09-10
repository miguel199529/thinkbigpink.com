import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import WorkView from './Components/Work/Work-view';
import People from './Components/People/People';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Girasolo from './Components/Girasolo/Girasolo';
import Menu from './Components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <Menu></Menu>
        <Home></Home>
        <About></About>
        <WorkView></WorkView>
        <People></People>
        <Girasolo></Girasolo>
        <Contact></Contact>
        <Footer></Footer>
      </Router>
    );
  }
}
export default App;
