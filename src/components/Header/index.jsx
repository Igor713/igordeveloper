import Menu from "../Menu";
import './styles.sass';
import Brand from '../../assets/icon/letter-i.png';
import { useState } from "react";

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        setIsActive(current => !current);
    }

    return (
        <header>
            <div className="header-container">
                <div className="brand">
                    <img src={Brand} alt="Logo" />
                </div>
                <div className={isActive ? 'header-mobile-btn' : 'header-mobile-btn open'} onClick={handleClick}>
                    <div className="menu-btn"></div>
                </div>
                <div className={isActive ? 'header-navigation open' : 'header-navigation'}>
                    <Menu
                        navClass={"header-nav"}
                        navLinks={[
                            { name: "Sobre mim", link: "#" },
                            { name: "Projetos", link: "#" },
                            { name: "Tecnologias", link: "#" }
                        ]}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;