import './Partners.scss';
import logo from './SoCLogo.png';
import aws_logo from './new/AWS_Logo.png';
import blackbaud from './new/Blackbaud Logo.png';
import ge from './new/ge_monogram_dark gray_432.png';
import gls from './new/GLS new_png (1).png';
import softdocs from './new/Softdocs-Logo-RGB-Solid.png';
import partnerdevice from './new/cactus.png';
import mule from './new/sticker-mule-logo.png';
import assembly from './new/Logo-darkblue.png';

ge ? console.log(ge): console.log("no dice");

function Partners() {
  return (
    <div id="partner">
      <div className="innerpartner">
        <div id="partnerdevice" style={{backgroundImage: `url(${partnerdevice})`}}></div>
        <div className="partnertextbody">
          <h2 className="partnerhead">in partnership with</h2>
          <div className="thepartner">
            <a href="https://www.clemson.edu/cecas/departments/computing/" target="_blank"><div><img src={logo} alt="GE"/></div></a>
            <a href="https://aws.amazon.com/" target="_blank"><div><img src={aws_logo} alt="aws_logo"/></div></a>
            <a href="https://www.blackbaud.com/" target="_blank"><div><img src={blackbaud} alt="blackbaud"/></div></a>
            <a href="https://www.ge.com/" target="_blank"><div><img src={ge} alt="GE"/></div></a>
            <a href="https://glsauto.com/" target="_blank"><div><img src={gls} alt="gls"/></div></a>
            <a href="https://www.softdocs.com/" target="_blank"><div><img src={softdocs} alt="softdocs"/></div></a>
            <a href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank"><div><img src={mule} alt="stickermule"/></div></a>
            <a href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank"><div><img src={assembly} alt="assembly_ai"/></div></a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Partners;
