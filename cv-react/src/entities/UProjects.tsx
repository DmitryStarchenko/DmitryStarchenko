import { useTranslation } from "react-i18next";
import type { Data } from "../shared/constants/Projects";

type Props = {
  data: Data;
  styles: CSSModuleClasses;
};

const UProjects = (props: Props) => {
  const { data, styles } = props;
  const { t } = useTranslation();

  return (
    <li>
      <a className={styles.projectsLink} href={data.url} target="_blank">
        {data.name}
      </a>
      <p className={styles.projectDescription}>{t(data.description)}</p>
      <div className={styles.stackContainer}>
        {data.stack.map((skill) => (
          <span key={skill} className={styles.stackItem}>
            {skill}
          </span>
        ))}
      </div>
    </li>
  );
};

export default UProjects;
