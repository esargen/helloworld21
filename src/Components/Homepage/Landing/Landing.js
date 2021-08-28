import React, { useState } from 'react';
import device from './Tempsite-device.png';
import Textcluster from './Textcluster.js';
import Sprite2 from './Sprite2.js';
import Sprite3 from './Sprite3.js';
import './Landing.scss';
import bg2 from './web_no_console.png';


const Landing = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [sprite, setSprite] = React.useState(true);

  function titleoption() {
    return (
      <div id="title">
        <div>HelloWorld 2021</div>
        <div id="subtitle">
          <div>Become a hacker</div>
          <div>Become a mentor</div>
        </div>
      </div>
  )};

  return (
    <div>
      <header style={{backgroundImage: `url(${bg2})`}}>
        {sprite ? titleoption() : ""}
        <div style={{
          backgroundImage: `url(${device})`
        }} id="console" >
          <div id="landinggroup">
            {loading ? <></> : sprite ? <Sprite3 /> : <Textcluster />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Landing;
