import './styles.sass';
import igorPc from '../../assets/igor-pc.png';
import Mainbuttons from '../MainButtons';

const MainContent = () => {
    return (
        <div id="main-content">
            <div className="wrapper">
                <div className="col-1">
                    <p className="title">Oi, sou Igor Matheus.</p>
                    <p className="sub-title">Desenvolvedor Front-End.</p>

                    <Mainbuttons />
                </div>
                <div className="col-2">
                    <img src={igorPc} alt="" className="content-image" />
                </div>
            </div>
        </div>
    );
};

export default MainContent;