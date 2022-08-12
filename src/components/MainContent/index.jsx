import './styles.sass';
import IgorPc from '../../assets/avatar/igor-pc.png';
import SocialButtons from '../SocialButtons';
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
                            link={"#"}
                            name={"GitHub"}
                            className="github button"
                            icon={<FaGithub />}
                        />

                        <SocialButtons
                            link={"#"}
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
        </section >
    );
};

export default MainContent;