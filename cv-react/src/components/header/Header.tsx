import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <h1 className={styles.name}>Dmitry Starchenko</h1>
        <h4 className={styles.jobTitle}>Junior Frontend Developer</h4>
        <div className={styles.contacts}>
          <img
            src="../../../assets/phone.jpg"
            alt="phone"
            className={styles.imageContacts}
          />
          <p className={styles.textContacts}>+375(44)5417831</p>
        </div>
        <div className={styles.contacts}>
          <img
            src="../../../assets/email.jpg"
            alt="email"
            className={styles.imageContacts}
          />
          <p className={styles.textContacts}>dololob92@gmail.com</p>
        </div>
        <div className={styles.contacts}>
          <img
            src="../../../assets/github.png"
            alt="github"
            className={styles.imageContacts}
          />
          <a
            href="https://github.com/DmitryStarchenko"
            className={styles.textContacts}
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className={styles.contacts}>
          <img
            src="../../../assets/linkedin.webp"
            alt="linkedin"
            className={styles.imageContacts}
          />
          <a
            href="https://www.linkedin.com/in/dmitry-starchenko-jfd"
            className={styles.textContacts}
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className={styles.contacts}>
          <img
            src="../../../assets/telegram.webp"
            alt="telegram"
            className={styles.imageContacts}
          />
          <a
            href="https://t.me/@BazZ92"
            className={styles.textContacts}
            target="_blank"
          >
            Telegram
          </a>
        </div>
      </div>
      <img
        src="../../../assets/avatar.jpg"
        alt="avatar"
        className={styles.avatar}
      />
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <a href="#personal" className={styles.navigationLink}>
              Personal information
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="#education" className={styles.navigationLink}>
              Education
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="#experience" className={styles.navigationLink}>
              Experience
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="#skills" className={styles.navigationLink}>
              Skills
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="#information" className={styles.navigationLink}>
              Additional information
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a href="#projects" className={styles.navigationLink}>
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
