import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";
import { RSSchool } from "../../shared/constants/School";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Experience")}</h2>
      <div className={styles.sectionContainer}>
        <div className={styles.experienceContent}>
          <div className={styles.years}>03.2026 - 04.2026</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>{t("ExpTitleReactAst")}</h2>
            <p className={styles.experienceSchool}>{t("ExpSchoolReactAst")}</p>
            <p className={styles.description}>{t("ExpDescReactAston")}</p>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <div className={styles.years}>10.2025 - 12.2025</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>{t("ExpTitleNode")}</h2>
            <p className={styles.experienceSchool}>{RSSchool}</p>
            <p className={styles.description}>{t("ExpDescNode")}</p>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <div className={styles.years}>07.2025 - 09.2025</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>{t("ExpTitleReact")}</h2>
            <p className={styles.experienceSchool}>{RSSchool}</p>
            <p className={styles.description}>{t("ExpDescReact")}</p>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <div className={styles.years}>11.2024 - 07.2025</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>{t("ExpTitleJS")}</h2>
            <p className={styles.experienceSchool}>{RSSchool}</p>
            <p className={styles.description}>{t("ExpDescJs")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
