import AdditionalInformation from "../../widgets/AdditionalInformation/AdditionalInformation";
import Education from "../../widgets/Education/Education";
import Experience from "../../widgets/Experience/Experience";
import Footer from "../../widgets/footer/Footer";
import CompactHeader from "../../widgets/header/CompactHeader";
import Header from "../../widgets/header/Header";
import Projects from "../../widgets/Projects/Projects";
import SplashScreen from "../../widgets/splash-screen/SplashScreen";
import Stack from "../../widgets/Stack/Stack";
import ToTopButton from "../../widgets/to-top-button/ToTopButton";

const Main = () => {
  return (
    <main>
      <SplashScreen />
      <Header />
      <CompactHeader />
      <Stack />
      <Experience />
      <Education />
      <AdditionalInformation />
      <Projects />
      <Footer />
      <ToTopButton />
    </main>
  );
};

export default Main;
