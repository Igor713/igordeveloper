import CardProject from "../CardProject";
import Project1 from '../../assets/projects/example.png';

import './styles.sass';

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2 className="projects-title">Projetos</h2>
            <div className="projects-wrapper">
                <CardProject
                    cardLink={"#"}
                    cardImage={Project1}
                    cardTitle={"Lorem"}
                    cardText={"Lorem"}
                />

                <CardProject
                    cardLink={"#"}
                    cardImage={Project1}
                    cardTitle={"Lorem"}
                    cardText={"Lorem"}
                />

                <CardProject
                    cardLink={"#"}
                    cardImage={Project1}
                    cardTitle={"Lorem"}
                    cardText={"Lorem"}
                />
            </div>
        </section>
    );
};

export default ProjectsContainer;