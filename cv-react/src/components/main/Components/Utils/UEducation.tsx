import { useTranslation } from "react-i18next";
import type { IEducation } from "../../../../types";

const EducationUtils = (data: IEducation, styles: CSSModuleClasses) => {
  const { t } = useTranslation();

  return (
    <div className={styles.educationContent}>
      <div className={styles.years}>{data.years}</div>
      <div className={styles.institution}>
        <h2 className={styles.educationTitle}>{data.school}</h2>
        <p className={styles.description}>{data.course}</p>
        {data.urlCertificate ? (
          <a
            href={data.urlCertificate}
            className={styles.certificate}
            target="_blank"
          >
            &#9733; {t("Certificate")} &#9733;
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EducationUtils;
