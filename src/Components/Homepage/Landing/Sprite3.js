import plantsprite from './plantgrowthsprite2.png';
import gsap from "gsap";
import React, { useEffect } from 'react';



function Sprite3() {

  var tween = gsap.to("#sprite2box", {duration: 3, backgroundPosition:"-320px 0px", repeat:-1, ease:"steps(3)", paused:false});
  const sprite2box = React.createRef();

  useEffect(() => {
    gsap.to(sprite2box.current,
      { duration: 4,
        backgroundPosition:"-455px 0px",
        repeat:-1, ease:"steps(3)",
        paused:false });
  }, []);

  return (
    <div id="sprite3">
      <div id="spritebox" ref={sprite2box} style={{backgroundImage: `url(${plantsprite})`}}></div>
    </div>
  )
}

export default Sprite3;
