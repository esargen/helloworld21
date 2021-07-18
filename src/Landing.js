import './App.css';
import './helloworld.scss';
import React from 'react';
import device from './Tempsite-device.png';

function Landing() {
  return (
    <header>
      <div style={{
        backgroundImage: `url(${device})`
      }} id="console">
        <div id="landinggroup">
          <div id="textcluster">
            <h2>HelloWorld 2021</h2>
            <p id="stutter">Coming soon!</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Landing;
