import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a
          href="https://dmitrystarchenko.github.io/rsschool-cv/cv"
          className={styles.footerName}
          target="_blank"
        >
          {t("Name")}
        </a>
        <div className={styles.updateDate}>26.09.2025</div>
      </div>
    </footer>
  );
};

export default Footer;
