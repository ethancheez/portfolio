import React from "react";
import { ChevronUp } from "react-bootstrap-icons";

const GoBackUp = () => {

  const onScroll = (e) => {
    const scrollTop = e.target.documentElement.scrollTop;
    if (scrollTop < 100) {
      document.getElementById("GoBackUp").classList.remove('slide-in');
      document.getElementById("GoBackUp").classList.add('slide-out');
    } else {
      document.getElementById("GoBackUp").classList.add('slide-in');
      document.getElementById("GoBackUp").classList.remove('slide-out');
    }
  };

  window.addEventListener("scroll", onScroll);

  return (
    <a id="GoBackUp" className="slide-out" href="/#">
      <ChevronUp size={40} />
    </a>
  );
};

export default GoBackUp;
