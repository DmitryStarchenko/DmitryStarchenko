import Footer from "./components/footer/Footer";
import CompactHeader from "./components/header/CompactHeader";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./Global.css";

const App = () => {
  return (
    <>
      <Header />
      <CompactHeader />
      <Main />
      <Footer />
    </>
  );
};

export default App;
