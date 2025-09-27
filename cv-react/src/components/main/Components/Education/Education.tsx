import { useTranslation } from "react-i18next";
import { school } from "../../../../constants/constants";
import styles from "./Education.module.css";

const Education = () => {
  const certificateJs = "https://app.rs.school/certificate/tk58l9nn";
  const certificateReact = "https://app.rs.school/certificate/h3exhhhe";
  const { t } = useTranslation();

  return (
    <section id="education" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Education")}</h2>
      <div className={styles.sectionContainer}>
        <div className={styles.educationContent}>
          <div className={styles.years}>07.2025 - 09.2025</div>
          <div className={styles.institution}>
            <h2 className={styles.educationTitle}>{school}</h2>
            <p className={styles.description}>React</p>
            <a
              href={certificateReact}
              className={styles.certificate}
              target="_blank"
            >
              &#9733; {t("Certificate")} &#9733;
            </a>
          </div>
        </div>
        <div className={styles.educationContent}>
          <div className={styles.years}>11.2024 - 07.2025</div>
          <div className={styles.institution}>
            <h2 className={styles.educationTitle}>{school}</h2>
            <p className={styles.description}>JavaScript/Front-end</p>
            <a
              href={certificateJs}
              className={styles.certificate}
              target="_blank"
            >
              &#9733; {t("Certificate")} &#9733;
            </a>
          </div>
        </div>
        <div className={styles.educationContent}>
          <div className={styles.years}>09.2009 - 06.2014</div>
          <div className={styles.institution}>
            <h2 className={styles.educationTitle}>{t("Un")}</h2>
            <p className={styles.description}>{t("UnDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
