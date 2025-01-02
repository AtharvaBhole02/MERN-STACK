import React from "react";
import "./../styles/ScrollToTop.css";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth",transition:'0.5s' });
  };

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      ↑
    </div>
  );
};

export default ScrollToTop;
