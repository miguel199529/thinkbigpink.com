import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import Naveg from './components/Naveg';

class App extends Component {
  render() {
    return (
      <div className='App bgr'>
        <Naveg/>
        <Home/>
      </div>
    );
  }
}

export default App;
