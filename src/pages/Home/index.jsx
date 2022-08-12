import AboutContainer from "../../components/AboutContainer";
import MainContent from "../../components/MainContent";
import ProjectsContainer from "../../components/ProjectsContainer";

import './styles.sass';

function App() {
  return (
    <div id="portfolio">
      <div className="portfolio-wrapper">
        <MainContent />
        <AboutContainer />
        <ProjectsContainer />
      </div>
    </div>
  );
};

export default App;
