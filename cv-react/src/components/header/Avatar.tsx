import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Header.module.css";
import { useState } from "react";

export const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        onClick={() => setIsOpen(!isOpen)}
        src="../../../assets/avatar.jpg"
        alt="avatar"
        className={styles.avatar}
      />
      {isOpen && (
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
      )}
    </>
  );
};
