import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import './styles.sass';

const aboutButtons = [
    { name: "Instagram", class: "instagram", link: "#", icon: <AiFillInstagram /> },
    { name: "E-mail", class: "email", link: "#", icon: <MdEmail /> },
]

const AboutButtons = () => {
    return (
        <div className="about-buttons">
            {aboutButtons.map((item) => (
                <a href={item.link} className={item.class} key={item.class}>{item.icon}{item.name}</a>
            ))};
        </div>
    )
};

export default AboutButtons;