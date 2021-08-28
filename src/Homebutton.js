import homebutton from './homebutton.svg';
import homebutton_down from './homebutton_down.svg';
import { Link } from 'react-router-dom'
import { Link as Link2, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

const Homebutton = (props) => {
  const [button, changeButton] = useState(homebutton);

  function scrollToTop() {
    changeButton(homebutton_down);
    scroll.scrollToTop();
    setTimeout(function() {
      changeButton(homebutton);
   }, 500);
  };

  return (
    <div className="homebutton navtag" style={{backgroundImage: `url(${button})`}} onClick={scrollToTop}></div>
  )
}

export default Homebutton;
