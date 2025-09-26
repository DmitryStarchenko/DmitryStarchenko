import AdditionalInformation from "./Components/AdditionalInformation/AdditionalInformation";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import PersonalInformation from "./Components/PersonalInformation/PersonalInformation";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

const Main = () => {
  return (
    <main>
      <PersonalInformation />
      <Education />
      <Experience />
      <Skills />
      <AdditionalInformation />
      <Projects />
    </main>
  );
};

export default Main;
