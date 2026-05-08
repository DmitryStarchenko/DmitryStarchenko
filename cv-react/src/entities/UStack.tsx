import type { TFunction } from "i18next";
import type { Stack } from "../shared/constants/Stack";

type Props = {
  stack: Stack[];
  t: TFunction<"translation", undefined>;
  nameStack: string;
  styles: CSSModuleClasses;
};

export const UStack = (props: Props) => {
  const { stack, t, nameStack, styles } = props;
  return (
    <div className={styles.skillsContent}>
      <h3 className={styles.skillsTitle}>{t(nameStack)}</h3>
      <div className={styles.description}>
        {stack.map((item, index) => {
          return (
            <span key={index} className={styles.skill}>
              <img
                src={item.src != "" ? item.src : undefined}
                alt={item.alt}
                title={item.title}
                className={styles.icon}
              />
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};
