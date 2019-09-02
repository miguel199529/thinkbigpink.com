import React from 'react';
//import {Route, Switch } from 'react-ro'

import { Route, Switch } from 'react-router-dom';

//componentes

import Home from './components/Home';
import About from './components/About';
import People from './components/People';
import Work from './components/Work';
import Girasolo from './components/Girasolo';
import Contact from './components/Contact';

const Routes = () => {
  return (
    <div>
      <Route exact paht='/' component={About} />

      <Route  paht='/about' component={Home} />
      <Route  paht='/people' component={People} />
      <Route  paht='/work' component={Work} />
      <Route  paht='/girasolo' component={Girasolo} />
      <Route  paht='/contact' component={Contact} />
      </div>

  );

}
export default Routes;
