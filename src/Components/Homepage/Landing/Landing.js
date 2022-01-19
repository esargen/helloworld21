import React, { useState } from 'react';
import device from './bowls.png';
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
        <div>CUhackit 2022</div>
        <div id="eventdate">January 29 & 30</div>
        <div id="subtitle">
          <div><a href="https://forms.gle/vb3dLak3M8b8dhFx8">Become a hacker</a></div>
          <div><a href="https://docs.google.com/forms/d/e/1FAIpQLScocyUsqDqTnUCfqYat99ly1W6hFI3-RC8jmom8Wgf0b64ppw/viewform?usp=sf_link">Become a mentor</a></div>
        </div>
      </div>
  )};

  return (
    <div>
      <header style={{backgroundColor: "#aed1cf"}}>
        {sprite ? titleoption() : ""}
        <div style={{
          backgroundImage: `url(${device})`
        }} id="console" >
          <div id="landinggroup">
            {loading ? <></> : sprite ? <></> : <Textcluster />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Landing;
