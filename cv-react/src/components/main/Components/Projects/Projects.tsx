import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import ProjectsUtils from "../Utils/UProjects";
import { dataProjects } from "../../../../constants/Projects";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>{t("Projects")}</h2>
      <ul className={styles.projectsList}>
        {ProjectsUtils(dataProjects.dataECommerce, styles)}
        {ProjectsUtils(dataProjects.dataPutman, styles)}
        {ProjectsUtils(dataProjects.dataPokemons, styles)}
      </ul>
    </section>
  );
};

export default Projects;
