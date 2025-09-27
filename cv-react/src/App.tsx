import Footer from "./components/footer/Footer";
import CompactHeader from "./components/header/CompactHeader";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import SplashScreen from "./components/splash-screen/SplashScreen";
import ToTopButton from "./components/to-top-button/ToTopButton";
import "./Global.css";

const App = () => {
  return (
    <>
      <SplashScreen />
      <Header />
      <CompactHeader />
      <Main />
      <Footer />
      <ToTopButton />
    </>
  );
};

export default App;
