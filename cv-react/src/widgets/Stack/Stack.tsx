import styles from "./Stack.module.css";
import { useTranslation } from "react-i18next";
import {
  api,
  core,
  methodologies,
  stylization,
  tools,
} from "../../shared/constants/Stack";
import { UStack } from "../../entities/UStack";

const Stack = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Skills")}</h2>
      <div className={styles.sectionContainer}>
        <UStack stack={core} t={t} nameStack={"Core"} styles={styles} />
        <UStack stack={tools} t={t} nameStack={"Tools"} styles={styles} />
        <UStack stack={api} t={t} nameStack={"API"} styles={styles} />
        <UStack
          stack={stylization}
          t={t}
          nameStack={"Stylization"}
          styles={styles}
        />
        <UStack
          stack={methodologies}
          t={t}
          nameStack={"Methodologies"}
          styles={styles}
        />
      </div>
    </section>
  );
};

export default Stack;
