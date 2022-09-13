import AboutContainer from "../../components/AboutContainer";
import MainContent from "../../components/MainContent";
import ProjectsContainer from "../../components/ProjectsContainer";
import TechnologiesContainer from "../../components/TechnologiesContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import './styles.sass';

const App = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-wrapper">
        <Header />
        <MainContent />
        <AboutContainer />
        <ProjectsContainer />
        <TechnologiesContainer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
