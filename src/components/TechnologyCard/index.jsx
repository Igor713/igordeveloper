import './styles.sass';

const TechnologyCard = ({ technologyIcon, technologyText, technologySubtitle }) => {
    return (
        <div className="technology-card-container">
            <div className="technology-card-wrapper">
                <div className="technology-card-icon">
                    {technologyIcon}
                </div>
                <div>
                    <p className="technology-card-text">{technologyText}</p>
                    <p className="technology-card-subtitle">
                        {technologySubtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;