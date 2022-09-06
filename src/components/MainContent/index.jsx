import './styles.sass';
import IgorPc from '../../assets/avatar/igor-pc.png';
import SocialButtons from '../SocialButtons';
import Divider from '../Divider';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const MainContent = () => {
    return (
        <section id="main-content">
            <div className="main-wrapper">
                <div className="col-1">
                    <p className="title">Oi, sou Igor Matheus.</p>
                    <p className="sub-title">Desenvolvedor Front-End.</p>

                    <div className="main-buttons">
                        <SocialButtons
                            link={"https://github.com/Igor713"}
                            name={"GitHub"}
                            className="github button"
                            icon={<FaGithub />}
                        />

                        <SocialButtons
                            link={"https://www.linkedin.com/in/igor-matheus-16a786118/"}
                            name={"LinkedIn"}
                            className="linkedin button"
                            icon={<FaLinkedin />}
                        />
                    </div>
                </div>
                <div className="col-2">
                    <img src={IgorPc} alt="" className="content-image" />
                </div>
            </div>
            <Divider backgroundColor={"#fff"} />
        </section >
    );
};

export default MainContent;