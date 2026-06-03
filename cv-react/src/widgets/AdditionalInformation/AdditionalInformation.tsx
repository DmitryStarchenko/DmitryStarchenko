import { useTranslation } from "react-i18next";
import styles from "./AdditionalInformation.module.css";

const AdditionalInformation = () => {
  const { t } = useTranslation();

  return (
    <section id="information" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("AddInformation")}</h2>
      <div className={styles.sectionContainer}>
        <div>
          <div className={styles.informationTitle}>
            {t("informationTitleOne")}
          </div>
          <p className={styles.informationDescription}>{t("lang")}</p>
        </div>
        <div>
          <div className={styles.informationTitle}>{t("aboutMeTitle")}</div>
          <p className={styles.informationDescription}>
            {t("aboutMeDescription")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInformation;
