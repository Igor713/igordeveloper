import Menu from "../Menu";
import igorReal from '../../assets/footer/igor-real.jpg';

import './styles.sass';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-col">
                    <img src={igorReal} alt="Autoretrato" />
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Redes</h4>
                    <div className="division"></div>
                    <Menu
                        navClass={"footer-nav"}
                        navLinks={[
                            { name: "Instagram", link: "#" },
                            { name: "GitHub", link: "#" },
                            { name: "LinkedIn", link: "#" }
                        ]}
                    />
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Contatos</h4>
                    <div className="division"></div>
                    <Menu
                        navClass={"footer-nav"}
                        navLinks={[
                            { name: "E-mail", link: "#" },
                            { name: "WhatsApp", link: "#" }
                        ]}
                    />
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Navegue</h4>
                    <div className="division"></div>
                    <Menu
                        navClass={"footer-nav"}
                        navLinks={[
                            { name: "Sobre mim", link: "#" },
                            { name: "Projetos", link: "#" },
                            { name: "Tecnologias", link: "#" }
                        ]}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;