import './styles.sass';
import igorPc from './images/igor-pc.png';

const MainContent = () => {
    return (
        <div id="main-content">
            <div className="wrapper">
                <div className="col-1">
                    <p className="title">Oi, sou Igor Matheus.</p>
                    <p className="sub-title">Desenvolvedor Front-End.</p>
                </div>
                <div className="col-2">
                    <img src={igorPc} alt="" className="content-image" />
                </div>
            </div>
        </div>
    );
};

export default MainContent;