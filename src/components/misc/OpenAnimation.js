import React from "react";
import { Image } from "react-bootstrap";
import Rocket from "img/rocket.png";

import "css/Animations.css";

const OpenAnimation = () => {
  const width = window.innerWidth > window.innerHeight ? "10vw" : "10vh";

  return (
    <>
      <div id="OpenAnimation"></div>
      <Image src={Rocket} id="rocketImg" style={{ width: width }} />
    </>
  );
};

export default OpenAnimation;
