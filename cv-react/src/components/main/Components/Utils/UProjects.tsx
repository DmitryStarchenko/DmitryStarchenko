import type { IData } from "../../../../types";

const ProjectsUtils = (data: IData, styles: CSSModuleClasses) => {
  return (
    <li>
      <a className={styles.projectsLink} href={data.url} target="_blank">
        {data.name}
      </a>
    </li>
  );
};

export default ProjectsUtils;
