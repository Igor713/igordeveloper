import './styles.sass';

const SocialButtons = ({ name, className, link, icon }) => {
    return (
        <a href={link} className={className} target="blank">{icon}{name}</a>
    )
};

export default SocialButtons;