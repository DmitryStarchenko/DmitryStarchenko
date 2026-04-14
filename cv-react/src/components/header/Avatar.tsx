import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Header.module.css";
import { useCallback, useState } from "react";

export const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const SwiperElem = useCallback(() => {
    return (
      <Swiper
        cssMode={true}
        className={styles.slider}
        onClick={() => setIsOpen(!isOpen)}
      >
        <SwiperSlide className={styles.sliderSwapper}>
          <img
            src="../../../assets/avatar.jpg"
            alt="avatar"
            className={styles.sliderAvatar}
          />
        </SwiperSlide>
      </Swiper>
    );
  }, [isOpen]);

  return (
    <>
      <div className={styles.avatarContainer}>
        <div className={styles.oval1}></div>
        <div className={styles.oval2}></div>
        <div className={styles.oval3}></div>
        <div className={styles.oval4}></div>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src="../../../assets/avatar.jpg"
          alt="avatar"
          className={styles.avatar}
        />
      </div>
      {isOpen && <SwiperElem />}
    </>
  );
};
