import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import i18next from "i18next";
import { useState } from "react";
import { contacts, navigation } from "../../constants/constants";

const Header = () => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(true);

  const changeLang = (lang: string) => {
    i18next.changeLanguage(lang);
    setDisabled(!disabled);
  };

  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <h1 className={styles.name}>{t("Name")}</h1>
        <h4 className={styles.jobTitle}>Junior Frontend Developer</h4>
        {contacts.map((item, index) => {
          return (
            <div className={styles.contacts} key={index}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.imageContacts}
              />
              <a href={item.href} className={styles.textContacts}>
                {item.text}
              </a>
            </div>
          );
        })}
      </div>
      <img
        src="../../../assets/avatar.jpg"
        alt="avatar"
        className={styles.avatar}
      />
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {navigation.map((item, index) => {
            return (
              <li className={styles.navigationItem} key={index}>
                <a href={item.href} className={styles.navigationLink}>
                  {t(item.text)}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.langContainer}>
        <button
          className={styles.buttonLangEN}
          onClick={() => changeLang("en")}
          disabled={disabled}
        >
          EN
        </button>
        <button
          className={styles.buttonLangRU}
          onClick={() => changeLang("ru")}
          disabled={!disabled}
        >
          RU
        </button>
      </div>
    </header>
  );
};

export default Header;
