import { school } from "../../../../constants/constants";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.sectionContainer}>
        <div className={styles.experienceContent}>
          <div className={styles.years}>07.2025 - 09.2025</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>{school}</h2>
            <p className={styles.description}>
              React <br />
              <br />
              Developing responsive applications with React.js and Next.js.
              <br />
              Skills Acquired: <br />- Deep knowledge of React.js, including
              React Router and React Hook Form; <br />- Experience developing
              applications using the following stacks: Next.js, MUI, Vitest,
              Supabase, Redux or Jotai, Next-intl, i18n, Yup or Zod; <br />-
              Using REST APIs, Axios (working with the HTTP protocol (GET, POST,
              PATCH, PUT)); <br />- Using npm, git, and devtools, including
              React Dev Tools Profiler; <br />- Experience working with CSS
              modules; <br />- Confident use of Git and GitHub, ability to
              understand other people's code and find errors;
              <br />- Experience setting up and building Vite projects;
              <br />- Working with code formatting linters (Stylelint, ESLint,
              Prettier); <br />- Experience writing tests in Vitest and Jest;
              <br />- Knowledge and application of Agile methodologies (Kanban,
              Scrum); <br />- Ability to work with Jira and Trello task boards;{" "}
              <br />- Communication skills, teamwork, and a focus on results.
            </p>
          </div>
        </div>
        <div className={styles.experienceContent}>
          <div className={styles.years}>11.2024 - 07.2025</div>
          <div className={styles.institution}>
            <h2 className={styles.experienceTitle}>{school}</h2>
            <p className={styles.description}>
              JavaScript/Front-end <br />
              <br />
              Development of adaptive SPA applications on JavaScript and
              React.js. <br />
              Skills acquired: <br />- deep knowledge of JavaScript, including
              working with TypeScript, ES6; <br />- experience in developing an
              eCommerce application on the stack: React, MUI, React Router,
              Vite, Vitest; <br />- using REST API (working with the HTTP
              protocol (GET, POST, PATCH, PUT));
              <br />- working with the Commercetools e-commerce platform;
              <br />- using npm, git, devtools; - understanding of basic design
              patterns, OOP; <br />- good knowledge of HTML, CSS and SVG,
              including adaptive, cross-browser and semantic markup;
              <br />- experience with CSS preprocessors SASS, SCSS; <br />-
              experience with BEM and CSS Modules; <br />- confident use of Git
              and GitHub, ability to understand other people's code and look for
              errors; <br />- experience in configuring and assembling projects
              on WebPack and Vite; <br />- working with linters for code
              formatting (Stylelint, ESLint, Prettier, Editorconfig); <br />-
              experience writing tests on Vitest, Jest;
              <br />- knowledge of Figma and experience in layout in Pixel
              perfect; <br />- knowledge and use of Agile methodologies (Kanban,
              Scrum); <br />- ability to work with a task board;
              <br />- communication skills, teamwork, focus on results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
