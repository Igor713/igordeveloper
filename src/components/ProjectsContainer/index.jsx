import CardProject from "../CardProject";

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <div className="projects-wrapper">
                <h2 className="projects-title">Projetos</h2>
            </div>

            <div>
                <CardProject />
            </div>
        </section>
    );
};

export default ProjectsContainer;