import './What.scss';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import aboutdevice from './aboutdevice.png';

function What() {

  function scrollHigher() {
    scroll.scrollToTop();
  };

  return(
    <div id="what">
      <div className="whattextbody">
        <h2 className="whathead">What the heckathon is a <span style={{color:"#FBC346"}}>hackathon?</span></h2>
        <p className="whatbody">A hackathon is a 24-hour invention marathon! Over the course of the event, teams of students will get together to design, build, and code their awesome new ideas and inventions!</p>
        <div className="tofaq" onClick={scrollHigher}><Link to="/faq">Got more questions?</Link></div>
      </div>
      <div id="aboutdevice" style={{backgroundImage: `url(${aboutdevice})`}}></div>
    </div>
  )
};

export default What;
