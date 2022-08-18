import Menu from "../Menu";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-col-1">

                </div>
                <div className="footer-col-2">
                    <p>Conecte-se</p>
                    <Menu
                        navClass={"footer-nav"}
                        navLinks={[
                            { name: "Instagram", link: "#" },
                            { name: "GitHub", link: "#" },
                            { name: "LinkedIn", link: "#" }
                        ]}
                    />
                </div>
                <div className="footer-col-3"></div>
                <div className="footer-col-4"></div>
            </div>
        </footer>
    );
};

export default Footer;