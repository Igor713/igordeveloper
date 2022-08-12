import './styles.sass';

const CardProject = ({ cardImage, cardText, cardTechnologies, cardLink }) => {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={cardImage} alt="Imagem do projeto" />
            </div>
            <p className="card-text">{cardText}</p>
            <div className="card-technologies">{cardTechnologies}</div>
            <a href={cardLink} className="card-link">a</a>
        </div>
    );
};

export default CardProject;