import React, { Component } from 'react';
import { Render } from 'react-dom'
import './App.css';
import Imagen from './Assets/2Puntos.svg';
import { Image } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import People from './pages/People';
import Girasolo from './pages/Girasolo';
import Contact from './pages/Contact';

//componentes

/*import home from './pages/Home';
import about from './pages/About';
import people from './pages/People';
import work from './pages/Work';
import girasolo from './pages/Girasolo';
import contact from './pages/Contact';*/


class App extends Component {
  render() {

    return (

      <Router>

        <div>

          <nav class="navbar navbar-inverse nv">
            <div class="container-fluid">
              <div class="navbar-header">
              <Link to={'./home'}>
              <Image
            src={Imagen}
            className="logonav"

          />
              </Link>

              </div>

              <ul class="nav navbar-nav navbar-right">
              <Link to={'/about'}>About</Link>
              <Link to={'/work'}>Work</Link>
              <Link to={'/people'}>People</Link>
              <Link to={'/girasolo'}>Girasolo</Link>
              <Link to={'/contact'}>Contact</Link>



                <li><a href="#"> Login</a></li>
              </ul>
            </div>
          </nav>


          <Switch>

            <Route exact path='/about' component={About} />
            <Route exact path='/people' component={People} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/girasolo' component={Girasolo} />
            <Route exact path='/contact' component={Contact} />
          </Switch>


        </div>
        <Home />
<About />

<Work />
<People />
      </Router>

    );
  }
}
export default App;

/*<Router>
  <div className="App">
    <Route  path="/" component={home} />

    <Route exact path="/work" component={girasolo} />
    <Route exact path="/work" component={about} />
    <Route exact path="/work" component={work} />
    <Route exact path="/people" component={people} />
    <Route exact path="/girasolo" component={girasolo} />
    <Route exact path="/contact" component={contact} />
  </div>

</Router>*/






/*import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import People from './pages/People'
import Work from './pages/Work'
import { BrowserRouter } from 'react-router-dom'
import Nav from "./components/"
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={People} />
            <Route path="/work" component={Work} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;*/

