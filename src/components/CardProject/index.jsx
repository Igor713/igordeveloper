import SocialButtons from '../SocialButtons';
import './styles.sass';

const CardProject = ({ cardLink, cardImage, cardTitle, cardText }) => {
    return (
        <a className="card-container" href={cardLink} target="blank">
            <div className="card-image">
                <img src={cardImage} alt="Imagem do projeto" />
            </div>
            <div className="card-wrapper">
                <h3 className="card-title">{cardTitle}</h3>
                <p className="card-text">{cardText}</p>
            </div>
        </a>
    );
};

export default CardProject;