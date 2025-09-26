import styles from "./Projects.module.css";

const Projects = () => {
  const eCommerce = "https://ecommerce-shop-rss2024.netlify.app/main";
  const putman = "https://putman.vercel.app/";
  const pokemons = "https://pokemon-react-2025.netlify.app/";

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <ul className={styles.projectsList}>
        <li>
          <a className={styles.projectsLink} href={eCommerce} target="_blank">
            eCommerce application shop
          </a>
        </li>
        <li>
          <a className={styles.projectsLink} href={putman} target="_blank">
            Putman
          </a>
        </li>
        <li>
          <a className={styles.projectsLink} href={pokemons} target="_blank">
            Pokemons React
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
