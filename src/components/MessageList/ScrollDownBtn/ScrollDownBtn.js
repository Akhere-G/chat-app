import React, { useState } from "react";
import styles from "./ScrollDownBtn.module.css";
import { DoubleArrow } from "@material-ui/icons";
const ScrollUpBtn = () => {
  const [showScroll, setShowScroll] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const scrollY = window.scrollY;
    const pageHeight = (document.body.scrollHeight - window.innerHeight) * 0.9;
    if (scrollY < pageHeight) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  }

  const scrollDown = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div
      className={`${styles.scrollDownBtn} ${showScroll && styles.show}`}
      onClick={scrollDown}
    >
      <DoubleArrow />
    </div>
  );
};

export default ScrollUpBtn;
