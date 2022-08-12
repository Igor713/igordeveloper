import './styles.sass';

const SocialButtons = ({ name, className, link, icon }) => {
    return (
        <a href={link} className={className}>{icon}{name}</a>
    )
};

export default SocialButtons;