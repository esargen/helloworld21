import plantsprite from './plantgrowthsprite2.png';
import gsap from "gsap";
import { useEffect } from 'react';

var tween = gsap.to("#spritebox", {duration: 5, backgroundPosition:"-640px 0px", repeat:-1, ease:"steps(3)", paused:false});

function Sprite() {

  useEffect(() => {
  tween.play();
}, []);

  return (
    <div id="sprite3">
      <div id="spritebox" style={{backgroundImage: `url(${plantsprite})`}}></div>
    </div>
  )
}

export default Sprite;
