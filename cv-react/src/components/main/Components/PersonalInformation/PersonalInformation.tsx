import styles from "./PersonalInformation.module.css";

const PersonalInformation = () => {
  return (
    <section id="personal" className={styles.section}>
      <h2 className={styles.sectionTitle}>Personal information</h2>
      <div className={styles.sectionContent}>
        <div className={styles.title}>
          Lives:
          <p className={styles.titleName}>Gomel, Republic of Belarus</p>
        </div>
        <div className={styles.title}>
          Citizenship:
          <p className={styles.titleName}>Republic of Belarus</p>
        </div>
        <div className={styles.title}>
          Gender:
          <p className={styles.titleName}>Male</p>
        </div>
        <div className={styles.title}>
          Education:
          <p className={styles.titleName}>Higher</p>
        </div>
        <div className={styles.title}>
          Date of birth:
          <p className={styles.titleName}>28.04.1992</p>
        </div>
        <div className={styles.title}>
          Marital status:
          <p className={styles.titleName}>Married (two children)</p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
