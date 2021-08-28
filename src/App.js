import Homepage from './Components/Homepage/Homepage.js';
import Faq from './Components/Faq/Faq.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import { useState, useEffect } from 'react';

function App() {
  const media = window.matchMedia('(min-width: 700px)');

  const [isgrow, isGrown] = useState(false);
  const [matches, setMatches] = useState(true);
  const [nav, growNav] = useState(false);

  useEffect(()=> {
    media.matches ? growNav("100%") : growNav("0%");
  }, [])

  function openNav() {
    growNav("100%");
    isGrown(true);
  }

  function closeNav() {
    growNav("0%");
    isGrown(false);
  }

  return (
  <div>
    <div id="hamburger" onClick={ () => isgrow ? closeNav() : openNav() }>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Navbar nav={nav} />
    <Switch>
      <Route path='/helloworld21' component={Homepage} />
      <Route path='/faq' component={Faq} />
    </Switch>
  </div>
);
}

export default App;
