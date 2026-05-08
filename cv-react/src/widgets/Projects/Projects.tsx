import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import { dataProjects } from "../../shared/constants/Projects";
import UProjects from "../../entities/UProjects";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Projects")}</h2>
      <ul className={styles.projectsList}>
        {UProjects(dataProjects.dataECommerce, styles)}
        {UProjects(dataProjects.dataPutman, styles)}
        {UProjects(dataProjects.dataPokemons, styles)}
      </ul>
    </section>
  );
};

export default Projects;
