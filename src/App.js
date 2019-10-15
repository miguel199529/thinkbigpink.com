import React, { Component } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import WorkView from './Components/Work/Work-view';
import People from './Components/People/People';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Girasolo from './Components/Girasolo/Girasolo';
import Menu from './Components/Menu/Menu';
import { TranslatorProvider } from 'react-translate';
import Button from './Components/Traduccion/Button';
function initializeAnalitics(){
  ReactGA.initialize('UA-150068623-1');
  ReactGA.pageview('/Home');
  ReactGA.pageview('/About');
  ReactGA.pageview('/WorkView');
  ReactGA.pageview('/People');
  ReactGA.pageview('/Girasolo');
  ReactGA.pageview('/Contact');
}
const tagManagerArgs = {
  gtmId: 'GTM-N55DB99'
};
TagManager.initialize(tagManagerArgs);
class App extends Component {
  _getLayout(lang) {
    return (<TranslatorProvider translations={require('./Components/Traduccion/' + lang + '.json')}>
      <div>
        <Button name="login" />
        <Button name="create_account" />
      </div>
      <Router>
        <Menu name="txt"></Menu>
        <Home name="txt"></Home>
        <About name="txt"></About>
        <WorkView name="txt"></WorkView>
        <People></People>
        <Girasolo name="txt"></Girasolo>
        <Contact name="txt"></Contact>
        <Footer></Footer>
      </Router>
    </TranslatorProvider>);
  }
  render() {
    initializeAnalitics();
    let url = window.location.href;
    if (url.search('/es') !== -1) {
      return this._getLayout('es');
    } else {
      return this._getLayout('en');
    }
  }
}
export default App;
