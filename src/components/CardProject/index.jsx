import SocialButtons from '../SocialButtons';
import './styles.sass';

const CardProject = ({ cardImage, cardText }) => {
    return (
        <div className="card-container">
            <div className="card-wrapper">
                <div className="card-image">
                    <img src={cardImage} alt="Imagem do projeto" />
                </div>
                <div>
                    <p className="card-text">{cardText}</p>
                    <SocialButtons
                        link={"#"}
                        className={"project-button"}
                        name={"Veja mais"}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardProject;