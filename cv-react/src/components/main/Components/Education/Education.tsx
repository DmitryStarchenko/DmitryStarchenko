import { school } from "../../../../constants/constants";
import styles from "./Education.module.css";

const Education = () => {
  const certificateJs = "https://app.rs.school/certificate/tk58l9nn";
  const certificateReact = "https://app.rs.school/certificate/h3exhhhe";

  return (
    <section id="education" className={styles.section}>
      <h2 className={styles.sectionTitle}>Education</h2>
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
              &#9733; Certificate &#9733;
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
              &#9733; Certificate &#9733;
            </a>
          </div>
        </div>
        <div className={styles.educationContent}>
          <div className={styles.years}>09.2009 - 06.2014</div>
          <div className={styles.institution}>
            <h2 className={styles.educationTitle}>
              Francisk Skorina Gomel State University
            </h2>
            <p className={styles.description}>
              Pedagogical Institute, physical education, trainer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
