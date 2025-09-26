import type { ReactNode } from "react";
import { skills } from "../../../../constants/constants";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.sectionContainer}>
        <div className={styles.skillsContent}>
          <h3 className={styles.skillsTitle}>Knowledge of languages</h3>
          <div className={styles.skillsDescription}>
            Russian - native <br />
            Belarusian - native <br />
            English - A1
          </div>
          <h3 className={styles.skillsTitle}>Skills</h3>
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
