import Menu from "../Menu";

import './styles.sass';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-col">

                </div>
                <div className="footer-col">
                    <h4 className="footer-title">Conecte-se</h4>
                    <div></div>
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