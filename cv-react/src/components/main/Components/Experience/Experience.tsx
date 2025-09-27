import { useTranslation } from "react-i18next";
import { school } from "../../../../constants/constants";
import styles from "./Experience.module.css";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Experience")}</h2>
      <div className={styles.sectionContainer}>
        <div className={styles.experienceContent}>
          <div className={styles.years}>07.2025 - 09.2025</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>{school}</h2>
            <p className={styles.description}>{t("ExpDescReact")}</p>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <div className={styles.years}>11.2024 - 07.2025</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>{school}</h2>
            <p className={styles.description}>{t("ExpDescJs")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
