import CardProject from "../CardProject";
import Project1 from '../../assets/projects/example.png';

import './styles.sass';
import Divider from "../Divider";

const ProjectsContainer = () => {
    return (
        <section className="projects-container">

            <div className="projects-wrapper">
                <h2 className="projects-title">Projetos</h2>
                <Divider
                    backgroundColor={"#1890e0"}
                />
                <p className="projects-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit sint saepe, itaque a accusamus at assumenda ex dolorum perferendis quos molestias quam. Accusantium dignissimos facere molestiae distinctio id suscipit!</p>
                <div className="projects">
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

                    <CardProject
                        cardLink={"#"}
                        cardImage={Project1}
                        cardTitle={"Lorem"}
                        cardText={"Lorem"}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectsContainer;