import React from "react";
import './styles.sass';
import Igor from '../../assets/Igor.png';
import AboutButtons from "../AboutButtons";
import GenericButtons from "../ButtonGeneric";

const AboutContainer = () => {
    return (
        <section className="about-container">
            <div className="about-wrapper">
                <div className="col-1">
                    <img src={Igor} alt="Igor" className="about-image" />
                </div>
                <div className="col-2">
                    <p className="about-title">Sobre mim</p>
                    <p className="about-country">Toledo/PR</p>
                    <p className="about-text">Oi, sou Igor Matheus, tenho 23 anos e nasci em Umuarama interior do Paraná e cresci em Guaíra. Atualmente, moro sozinho em Toledo. Para conseguir isso batalho todo dia, busco uma vaga de front end Jr, uma área pela qual gosto muito.</p>

                    <GenericButtons name={"title"} />
                    <GenericButtons name={"title2"} />
                </div>
            </div>
        </section>
    );
};

export default AboutContainer;