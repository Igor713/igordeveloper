import './styles.sass';
import IgorPc from '../../assets/igor-pc.png';
import MainButtons from '../MainButtons';

const MainContent = () => {
    return (
        <section id="main-content">
            <div className="main-wrapper">
                <div className="col-1">
                    <p className="title">Oi, sou Igor Matheus.</p>
                    <p className="sub-title">Desenvolvedor Front-End.</p>

                    <MainButtons />
                </div>
                <div className="col-2">
                    <img src={IgorPc} alt="" className="content-image" />
                </div>
            </div>
        </section >
    );
};

export default MainContent;