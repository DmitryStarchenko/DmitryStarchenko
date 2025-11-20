import { useTranslation } from "react-i18next";
import styles from "./Education.module.css";
import EducationUtils from "../Utils/UEducation";
import { dataJS, dataNode, dataReact } from "../../../../constants/Education";

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Education")}</h2>
      <div className={styles.sectionContainer}>
        {EducationUtils(dataNode, styles)}
        {EducationUtils(dataReact, styles)}
        {EducationUtils(dataJS, styles)}
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
