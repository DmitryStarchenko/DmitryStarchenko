import type { Data } from "../shared/constants/Projects";

const UProjects = (data: Data, styles: CSSModuleClasses) => {
  return (
    <li>
      <a className={styles.projectsLink} href={data.url} target="_blank">
        {data.name}
      </a>
    </li>
  );
};

export default UProjects;
