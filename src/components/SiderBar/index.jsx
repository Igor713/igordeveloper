import SocialNetworks from '../SocialNetWorks';
import InformationContainer from '../InformationContainer';
import Avatar from '../img/igor.jpg';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Igor Matheus" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Donwload currículo</a>
        </aside>
    );
};

export default Sidebar;