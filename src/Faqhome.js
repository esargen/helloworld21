import homebutton from './homebutton.svg';
import homebutton_down from './homebutton_down.svg';
import { Link } from 'react-router-dom'
import { Link as Link2, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

const Faqhome = (props) => {
  const [button, changeButton] = useState(homebutton);

  function scrollUp() {
    changeButton(homebutton_down);
    scroll.scrollToTop();
    setTimeout(function() {
      changeButton(homebutton);
   }, 500);
  };

  return (
    <Link to="/" spy={true} smooth={true} onClick={scrollUp}><div className="homebutton navtag" style={{backgroundImage: `url(${button})`}}></div></Link>
  )
}

export default Faqhome;
