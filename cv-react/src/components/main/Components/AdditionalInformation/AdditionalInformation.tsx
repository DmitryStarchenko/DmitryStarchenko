import styles from "./AdditionalInformation.module.css";

const AdditionalInformation = () => {
  return (
    <section id="information" className={styles.section}>
      <h2 className={styles.sectionTitle}>Additional information</h2>
      <div className={styles.sectionContainer}>
        <div>
          <div className={styles.informationTitle}>
            Having a driving license:
          </div>
          <p className={styles.informationDescription}>A, B</p>
        </div>
        <div>
          <div className={styles.informationTitle}>Personal qualities:</div>
          <p className={styles.informationDescription}>
            I can find a common language with different people, establish
            contact, I can work in a team, I am stress-resistant
          </p>
        </div>
        <div>
          <div className={styles.informationTitle}>Professional skills:</div>
          <p className={styles.informationDescription}>
            I am ready to take on obligations and fulfill them on time, I am
            diligent and punctual. I am able to work without constant
            supervision, I know how to plan and structure my work, and quickly
            adapt to new conditions.
          </p>
        </div>
        <div>
          <div className={styles.informationTitle}>About me:</div>
          <p className={styles.informationDescription}>
            I am looking for a job with the aim of doing what interests me,
            working on interesting and complex projects in order to realize my
            potential and continue to develop professionally. Independent and
            proactive. Ready to take on new and interesting tasks for their
            implementation. I have the skills of self-organization and
            self-discipline, planning and managing task priorities, searching
            for and analyzing new information for myself, skills in working on
            mistakes. I have a great desire to learn and develop. I am actively
            improving my level of English.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInformation;
