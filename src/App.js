import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//importar vistas
import Home from './components/Home';
//
import PropTypes from 'prop-types';
import Naveg from './components/Naveg';
import About from './components/About';


class App extends Component{

  static propTypes={
    children:PropTypes.object.isRequired
  };
render (){

  const {children} =this.props;
  return (
<div className="App bgr">
    
    <Naveg/>
    <Home/>
    
        </div>
  );
}

}
  
  
  

export default App;




  
