import Menu from "../Menu";

import './styles.sass';

import Brand from '../../assets/icon/letter-i.png';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="brand">
                    <img src={Brand} alt="Logo" />
                </div>
                <div className="header-navigation">
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