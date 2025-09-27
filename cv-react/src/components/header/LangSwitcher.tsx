import i18n from "../../i18n";
import styles from "./LangSwitcher.module.css";

const LangSwitcher = () => {
  const currentLang = i18n.language;

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.langContainer}>
      <button
        className={styles.buttonLang}
        onClick={() => changeLang("en")}
        disabled={currentLang === "en"}
      >
        EN
      </button>
      <button
        className={styles.buttonLang}
        onClick={() => changeLang("ru")}
        disabled={currentLang === "ru"}
      >
        RU
      </button>
    </div>
  );
};

export default LangSwitcher;
