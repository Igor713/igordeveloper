import Menu from "../Menu";
import Divider from '../Divider';
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
                    <Divider backgroundColor={"#1890e0"} />
                    <Menu
                        navClass={"footer-nav"}
                        navLinks={[
                            { name: "Instagram", link: "https://www.instagram.com/1gor_matheus", target: "blank" },
                            { name: "GitHub", link: "https://github.com/Igor713", target: "blank" },
                            { name: "LinkedIn", link: "https://www.linkedin.com/in/igor-matheus-16a786118", target: "blank" }
                        ]}
                    />
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Contatos</h4>
                    <Divider backgroundColor={"#1890e0"} />
                    <Menu
                        navClass={"footer-nav"}
                        navLinks={[
                            { name: "E-mail", link: "mailto:igormatheussiquieri@gmail.com" },
                            { name: "WhatsApp", link: "https://api.whatsapp.com/send?phone=554599431951&text=Ol%C3%A1", target: "blank" }
                        ]}
                    />
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Navegue</h4>
                    <Divider backgroundColor={"#1890e0"} />
                    <Menu
                        navClass={"footer-nav"}
                        navLinks={[
                            { name: "Sobre mim", link: "#about-container" },
                            { name: "Projetos", link: "#projects-container" },
                            { name: "Tecnologias", link: "#technologies-container" }
                        ]}
                    />
                </div>
            </div>
            <div className="copyright">
                © Copyright {(new Date().getFullYear())} | Created by Igor Siquieri
            </div>
        </footer>
    );
};

export default Footer;