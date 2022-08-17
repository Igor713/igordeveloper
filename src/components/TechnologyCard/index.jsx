import './styles.sass';

const TechnologyCard = ({ technologyIcon, technologyClass, technologyText, technologySubtitle }) => {
    return (
        <div className="technology-card-container">
            <div className="technology-card-wrapper">
                <div className={"technology-icon " + technologyClass}>
                    {technologyIcon}
                </div>
                <div className="text-area">
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