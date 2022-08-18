import AboutContainer from "../../components/AboutContainer";
import MainContent from "../../components/MainContent";
import ProjectsContainer from "../../components/ProjectsContainer";
import TechnologiesContainer from "../../components/TechnologiesContainer";
import Footer from "../../components/Footer";

import './styles.sass';

function App() {
  return (
    <div id="portfolio">
      <div className="portfolio-wrapper">
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
