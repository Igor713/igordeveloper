import SocialButtons from '../SocialButtons';
import './styles.sass';

const CardProject = ({ cardLink, cardImage, cardTitle, cardText }) => {
    return (
        <div className="card-content">
            <div className="background-hover"></div>
            <div className="card-image">
                <img src={cardImage} alt="Imagem do 
                projeto" />
            </div>
            <div className="card-wrapper">
                <h3 className="card-title">{cardTitle}</h3>
                <a href={cardLink} className="access">Acesse</a>
                <p className="card-text">{cardText}</p>
            </div>
        </div>
    );
};

export default CardProject;