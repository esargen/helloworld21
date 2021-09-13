import { Link } from 'react-router-dom';
import { Link as Link2, animateScroll as scroll } from 'react-scroll';
import Homebutton from '../../Homebutton.js';
import Faqhome from '../../Faqhome.js';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import App from '../../App.js';


const Navbar = (props) => {


  const [where, changeWhere] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let locale = location.pathname;
    if (locale === "/faq") {
      changeWhere(true);
      console.log(locale);
    } else {
      changeWhere(false);
    };
  }, [location]);

  function scrollHigher() {
    scroll.scrollToTop();
  };


  function linkUp() {
    return (
      <>
        {where ? "" : <Homebutton />}
        <div className="navtag" ><Link2  to="about" spy={true} smooth={true}>About</Link2></div>
        <div className="navtag" ><Link2  to="partner" spy={true} smooth={true}>Partners</Link2></div>
        <div className="navtag" ><Link2  to="contact" spy={true} smooth={true}>Contact</Link2></div>
        <div className="navtag faq" onClick={scrollHigher}><Link to="/faq">FAQ</Link></div>
      </>
    )
  };

  return (
  <div style={{ maxHeight: props.nav }} id="navbar">
    {where ? <Faqhome /> : linkUp()}

  </div>
);
};

export default Navbar;
