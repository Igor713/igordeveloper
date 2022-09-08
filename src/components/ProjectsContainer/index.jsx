import CardProject from "../CardProject";
import Project1 from '../../assets/projects/example.png';
import Baja from '../../assets/projects/baja.png';
import Diagnose from '../../assets/projects/diagnose-toledo.png';
import Portfolio from '../../assets/projects/portfolio.png';
import DayNight from '../../assets/projects/day-night.png';

import './styles.sass';
import Divider from "../Divider";

const ProjectsContainer = () => {
    return (
        <section id="projects-container">

            <div className="projects-wrapper">
                <h2 className="projects-title">Projetos</h2>
                <Divider
                    backgroundColor={"#1890e0"}
                />
                <p className="projects-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit sint saepe, itaque a accusamus at assumenda ex dolorum perferendis quos molestias quam. Accusantium dignissimos facere molestiae distinctio id suscipit!</p>
                <div className="projects">
                    <CardProject
                        cardLink={"https://github.com/Igor713/Baja"}
                        cardImage={Baja}
                        cardTitle={"Projeto Baja"}
                        cardText={"HTML, CSS e JavaScript"}
                    />

                    <CardProject
                        cardLink={"https://github.com/Igor713/diagnose"}
                        cardImage={Diagnose}
                        cardTitle={"Diagnose Toledo"}
                        cardText={"WordPress"}
                    />

                    <CardProject
                        cardLink={"#"}
                        cardImage={Portfolio}
                        cardTitle={"Meu portfólio"}
                        cardText={"ReactJs e SASS"}
                    />

                    <CardProject
                        cardLink={"https://github.com/Igor713/DayNight"}
                        cardImage={DayNight}
                        cardTitle={"DayNight"}
                        cardText={"CSS"}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectsContainer;