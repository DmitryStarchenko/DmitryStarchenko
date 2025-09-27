import type { ReactNode } from "react";
import { skills } from "../../../../constants/constants";
import styles from "./Skills.module.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Skills")}</h2>
      <div className={styles.sectionContainer}>
        <div className={styles.skillsContent}>
          <h3 className={styles.skillsTitle}>{t("Knowledge")}</h3>
          <div className={styles.skillsDescription}>{t("lang")}</div>
          <h3 className={styles.skillsTitle}>{t("Skills")}</h3>
          <div className={styles.description}>
            {skills.map((item, index): ReactNode => {
              return (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  className={styles.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
