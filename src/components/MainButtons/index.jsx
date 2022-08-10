import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles.sass';

const mainButtons = [
    { name: "GitHub", class: "github", link: "#", icon: <FaGithub /> },
    { name: "LinkedIn", class: "linkedin", link: "#", icon: <FaLinkedin /> },
]

const Mainbuttons = () => {
    return (
        <div className="main-buttons">
            {mainButtons.map((item) => (
                <a href={item.link} className={item.class}>{item.icon}{item.name}</a>
            ))};
        </div>
    )
};

export default Mainbuttons;