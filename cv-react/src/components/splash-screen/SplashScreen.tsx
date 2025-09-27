import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 200);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.splashScreen}>
      <div className={`${styles.helloText} ${showText ? styles.show : ""}`}>
        Hello
      </div>
    </div>
  );
};

export default SplashScreen;
