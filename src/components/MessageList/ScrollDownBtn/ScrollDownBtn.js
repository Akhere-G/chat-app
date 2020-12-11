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
    const pageHeight = (document.body.scrollHeight - window.innerHeight) * 0.5;
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
    <div className={`${styles.container} ${showScroll ? styles.show : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.scrollDownBtn} onClick={scrollDown}>
          <DoubleArrow />
        </div>
      </div>
    </div>
  );
};

export default ScrollUpBtn;
