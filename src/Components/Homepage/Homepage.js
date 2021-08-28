import './helloworld.scss';

import Landing from './Landing/Landing.js';
import About from './About/About.js';
import What from './What/What.js';
import Partners from './Partners/Partners.js';
import Contact from './Contact/Contact.js';

function Homepage() {
  return (
    <div className="App">
      <Landing title="Landing" />
      <About title="About" id="about" />
      <What title="What" id="what" />
      <Partners title="Partners" id="partners"/>
      <Contact title="Contact" id="contact" />
    </div>
  );
}

export default Homepage;
