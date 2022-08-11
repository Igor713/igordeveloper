import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import './styles.sass';

const mainButtons = [
    { name: "GitHub", className: "github", link: "#", icon: <FaGithub /> },
    { name: "LinkedIn", className: "linkedin", link: "#", icon: <FaLinkedin /> },
]

const GenericButtons = ({ name, className, link, icon }) => {
    return (
        <div className="main-buttons">
            <a href={link} className={className}>{icon}{name}</a>
        </div>
    )
};

export default GenericButtons;