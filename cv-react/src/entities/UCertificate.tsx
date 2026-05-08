type Props = {
  certificateURL: string;
  spec?: string;
  styles: CSSModuleClasses;
};

export const UCertificate = (props: Props) => {
  const { certificateURL, spec, styles } = props;
  const name = "Certificate";
  return (
    <p className={styles.certificateCurses}>
      <a
        href={certificateURL}
        className={styles.certificateLink}
        target="_blank"
      >
        &#9734; {name} &#9734;
      </a>
      {spec}
    </p>
  );
};
