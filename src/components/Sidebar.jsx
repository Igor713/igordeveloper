import Avatar from '../img/igor.jpg'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Igor Matheus" />
            <p className="title">Desenvolvedor</p>
            <p>Redes sociais</p>
            <p>Informações de contato</p>
            <a href="" className="btn">Donwload currículo</a>
        </aside>
    );
};

export default Sidebar;