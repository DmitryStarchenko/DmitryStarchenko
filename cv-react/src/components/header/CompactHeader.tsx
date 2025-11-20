import { useState, useEffect, useRef } from "react";
import styles from "./CompactHeader.module.css";
import { useTranslation } from "react-i18next";
import LangSwitcher from "./LangSwitcher";
import { contacts } from "../../constants/Contacts";
import { navigation } from "../../constants/Navigation";

const CompactHeader = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState<"contacts" | "menu" | null>(
    null
  );

  const contactsMenuRef = useRef<HTMLDivElement>(null);
  const navigationMenuRef = useRef<HTMLDivElement>(null);
  const contactsButtonRef = useRef<HTMLButtonElement>(null);
  const navigationButtonRef = useRef<HTMLButtonElement>(null);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 280) {
      setIsVisible(true);
    } else if (window.scrollY < lastScrollY && window.scrollY < 280) {
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        activeMenu === "contacts" &&
        !contactsMenuRef.current?.contains(target) &&
        !contactsButtonRef.current?.contains(target)
      ) {
        setActiveMenu(null);
      }

      if (
        activeMenu === "menu" &&
        !navigationMenuRef.current?.contains(target) &&
        !navigationButtonRef.current?.contains(target)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu]);

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const toggleMenu = (menu: "contacts" | "menu") => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeAllMenus = () => {
    setActiveMenu(null);
  };

  const isContactsOpen = activeMenu === "contacts";
  const isNavigationOpen = activeMenu === "menu";

  return (
    <header
      className={`${styles.header} ${
        isVisible ? styles.headerVisible : styles.headerHidden
      }`}
    >
      <div className={styles.headerLeft}>
        <div className={styles.burgerMenu} ref={contactsMenuRef}>
          <button
            ref={contactsButtonRef}
            className={`${styles.burgerButton} ${
              isContactsOpen ? styles.burgerButtonActive : ""
            }`}
            onClick={() => toggleMenu("contacts")}
            aria-label="Contacts"
            aria-expanded={isContactsOpen}
          >
            {t("Contacts")}
          </button>
          {isContactsOpen && (
            <div className={styles.dropdownMenu}>
              <div className={styles.menuContent}>
                {contacts.map((item, index) => (
                  <div className={styles.contactItem} key={index}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={styles.imageContacts}
                    />
                    <a
                      href={item.href}
                      className={styles.textContacts}
                      onClick={closeAllMenus}
                    >
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.burgerMenu} ref={navigationMenuRef}>
          <button
            ref={navigationButtonRef}
            className={`${styles.burgerButton} ${
              isNavigationOpen ? styles.burgerButtonActive : ""
            }`}
            onClick={() => toggleMenu("menu")}
            aria-label="Menu"
            aria-expanded={isNavigationOpen}
          >
            {t("Menu")}
          </button>
          {isNavigationOpen && (
            <div className={styles.dropdownMenu}>
              <div className={styles.menuContent}>
                {navigation.map((item, index) => (
                  <div className={styles.navigationItem} key={index}>
                    <a
                      href={item.href}
                      className={styles.navigationLink}
                      onClick={closeAllMenus}
                    >
                      {t(item.text)}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <LangSwitcher />
    </header>
  );
};

export default CompactHeader;
