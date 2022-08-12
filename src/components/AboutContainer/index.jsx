import React from "react";
import './styles.sass';
import Igor from '../../assets/avatar/Igor.png';
import SocialButtons from "../SocialButtons";
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

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

                    <div className="about-buttons">
                        <SocialButtons
                            link={"#"}
                            name={"Instagram"}
                            className="instagram button"
                            icon={<AiFillInstagram />}
                        />

                        <SocialButtons
                            link={"#"}
                            name={"E-mail"}
                            className="email button"
                            icon={<MdEmail />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContainer;