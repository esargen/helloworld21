import './Partners.scss';
import logo from './SoCLogo.png';
import partnerdevice from './partnerdevice.png';

function Partners() {
  return (
    <div id="partner">
      <div className="innerpartner">
        <div id="partnerdevice" style={{backgroundImage: `url(${partnerdevice})`}}></div>
        <div className="partnertextbody">
          <h2 className="partnerhead">in partnership with</h2>
          <div className="thepartner">
            <a href="https://www.clemson.edu/cecas/departments/computing/" target="_blank"><div style={{backgroundImage: `url(${logo})`}}></div></a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Partners;
