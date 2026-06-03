import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Experience")}</h2>
      <div className={styles.sectionContainer}>
        <div className={styles.experienceContent}>
          <div className={styles.years}>{t("AstonDate")}</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>
              {t("AstonReactDeveloperTitle")}
            </h2>
            <p className={styles.experienceSchool}>
              {t("AstonReactDeveloperSchool")}
            </p>
            <p className={styles.description}>
              {t("AstonReactDeveloperDescription")}
            </p>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <div className={styles.years}>{t("FullstackDate")}</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>
              {t("FullstackDeveloperTitle")}
            </h2>
            <p className={styles.experienceSchool}>
              {t("FullstackDeveloperSchool")}
            </p>
            <p className={styles.description}>
              {t("FullstackDeveloperDescription")}
            </p>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <div className={styles.years}>{t("NextJSDate")}</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>
              {t("NextJSDeveloperTitle")}
            </h2>
            <p className={styles.experienceSchool}>
              {t("NextJSDeveloperSchool")}
            </p>
            <p className={styles.description}>
              {t("NextJSDeveloperDescription")}
            </p>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <div className={styles.years}>{t("FrontendDate")}</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>
              {t("FrontendDeveloperTitle")}
            </h2>
            <p className={styles.experienceSchool}>
              {t("FrontendDeveloperSchool")}
            </p>
            <p className={styles.description}>
              {t("FrontendDeveloperDescription")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
