import React from 'react';
//import {Route, Switch } from 'react-ro'

import {Route, Switch} from 'react-router-dom';

//componentes

import App from './App';
import About from './components/About.js';


const AppRouters = () => (
  <App>
    <Switch>
      <Route path="/about" component={About} />
    </Switch>
  </App>
);


export default AppRouters;
