import React from "react";
import './styles.sass';
import eu from './images/igor-site.png';

const AboutContainer = () => {
    return (
        <section className="about-container">
            <div className="wrapper">
                <div className="col-1">
                    <p className="content">Oi, sou Igor Matheus, tenho 23 anos e nasci em Umuarama interior do Paraná e cresci em Guaíra. Atualmente, moro sozinho em Toledo. Para conseguir isso batalho todo dia, busco uma vaga de front end Jr, uma área pela qual gosto muito.</p>
                </div>
                <div className="col-2">
                    <img src={eu} alt="" className="content-image" />
                </div>
            </div>
        </section>
    );
};

export default AboutContainer;