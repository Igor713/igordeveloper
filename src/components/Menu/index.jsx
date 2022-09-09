import './styles.sass';

const Menu = ({ navClass, navLinks, click }) => {
    return (
        <nav className={navClass}>
            <ul>
                {navLinks.map((item) => (
                    <li>
                        <a href={item.link} target={item.target} onClick={click}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu; 