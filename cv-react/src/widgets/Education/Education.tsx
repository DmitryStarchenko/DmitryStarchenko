import { useTranslation } from "react-i18next";
import styles from "./Education.module.css";
import { useState } from "react";
import {
  certificateJs,
  certificateNode,
  certificateReact,
  certificateReactAston,
} from "../../shared/constants/Education";
import { RSSchool } from "../../shared/constants/School";
import { UCertificate } from "../../entities/UCertificate";

const Education = () => {
  const [viewAston, setViewAston] = useState(false);
  const [viewRS, setViewRS] = useState(false);
  const { t } = useTranslation();
  const JsCourse = "- JavaScript/Front-end";
  const ReactCourse = "- React";
  const NodeCourse = "- Node.js";

  return (
    <section id="education" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Education")}</h2>
      <div className={styles.sectionContainer}>
        <div className={styles.educationContent}>
          <div className={styles.institution}>
            <h3 className={styles.educationTitle}>{t("Un")}</h3>
            <p className={styles.description}>(2009 - 2014)</p>
            <p className={styles.description}>{t("UnDesc")}</p>
          </div>
        </div>
        <div className={styles.educationContent}>
          <h3 className={styles.educationTitle}>{t("CursesTitle")}</h3>
          <div
            className={styles.curses}
            onClick={() => setViewAston(!viewAston)}
          >
            <span className={styles.dot}>•</span> Aston
            <p className={styles.cursesDesc}>- React (2026)</p>
          </div>
          {viewAston && (
            <div className={styles.certificateContainer}>
              <UCertificate
                certificateURL={certificateReactAston}
                styles={styles}
              />
            </div>
          )}
          <div className={styles.curses} onClick={() => setViewRS(!viewRS)}>
            <span className={styles.dot}>•</span> {RSSchool}
            <p className={styles.cursesDesc}>
              - Node.js, React, JavaScript/Front-end (2024–2025)
            </p>
          </div>
          {viewRS && (
            <div className={styles.certificateContainer}>
              <UCertificate
                certificateURL={certificateJs}
                spec={JsCourse}
                styles={styles}
              />
              <UCertificate
                certificateURL={certificateReact}
                spec={ReactCourse}
                styles={styles}
              />
              <UCertificate
                certificateURL={certificateNode}
                spec={NodeCourse}
                styles={styles}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
