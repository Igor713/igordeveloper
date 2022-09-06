import Menu from "../Menu";
import './styles.sass';
import Brand from '../../assets/icon/letter-i.png';
import { useState } from "react";

const Header = () => {

    const [isActive, setIsActive] = useState(true);

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
                            { name: "Sobre mim", link: "#about-container" },
                            { name: "Projetos", link: "#" },
                            { name: "Tecnologias", link: "#" },
                            { name: "WhatsApp", link: "https://api.whatsapp.com/send?phone=554599431951&text=Ol%C3%A1" }
                        ]}
                    />

                    <div className="information-container">
                        <a className="information-link" href="https://api.whatsapp.com/send?phone=554599431951&text=Ol%C3%A1" target="blank">(45) 99943-1951</a>
                        <a className="information-link" href="mailto: igormatheussiquieri@gmail.com" >igormatheussiquieri@gmail.com</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;