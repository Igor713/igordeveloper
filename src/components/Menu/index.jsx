import './styles.sass';

const Menu = ({ navClass, navLinks }) => {
    return (
        <nav className={navClass}>
            <ul>
                {navLinks.map((item) => (
                    <li>
                        <a href={item.link}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu; 