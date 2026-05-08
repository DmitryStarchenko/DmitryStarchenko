import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.splashScreen}>
      <div className={`${styles.helloText}`}>Hello</div>
    </div>
  );
};

export default SplashScreen;
