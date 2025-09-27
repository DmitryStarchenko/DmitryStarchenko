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
          <p className={styles.informationDescription}>A, B</p>
        </div>
        <div>
          <div className={styles.informationTitle}>
            {t("informationTitleTwo")}
          </div>
          <p className={styles.informationDescription}>
            {t("informationDescriptionOne")}
          </p>
        </div>
        <div>
          <div className={styles.informationTitle}>
            {t("informationTitleThree")}
          </div>
          <p className={styles.informationDescription}>
            {t("informationDescriptionTwo")}
          </p>
        </div>
        <div>
          <div className={styles.informationTitle}>
            {t("informationTitleFour")}
          </div>
          <p className={styles.informationDescription}>
            {t("informationDescriptionThree")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInformation;
