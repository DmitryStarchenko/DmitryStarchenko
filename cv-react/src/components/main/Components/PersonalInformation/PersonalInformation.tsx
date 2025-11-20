import { useTranslation } from "react-i18next";
import styles from "./PersonalInformation.module.css";
import { personalInformation } from "../../../../constants/PersonalInfo";

const PersonalInformation = () => {
  const { t } = useTranslation();
  return (
    <section id="personal" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Personal")}</h2>
      <div className={styles.sectionContent}>
        {personalInformation.map((item, index) => {
          return (
            <div className={styles.title} key={index}>
              {t(item.title)}
              <p className={styles.titleName}>{t(item.titleName)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PersonalInformation;
