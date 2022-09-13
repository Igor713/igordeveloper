import React from "react";
import './styles.sass';
import Igor from '../../assets/avatar/Igor.png';
import SocialButtons from "../SocialButtons";
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const AboutContainer = () => {
    return (
        <section id="about-container">
            <div className="about-wrapper">
                <div className="col-1">
                    <img src={Igor} alt="Igor" className="about-image" />
                </div>
                <div className="col-2">
                    <p className="about-title">Sobre mim</p>
                    <p className="about-country">Toledo/PR</p>
                    <p className="about-text">Meu nome é Igor, tenho 24 anos cresci em Guaíra no interior do Paraná e me mudei para Toledo com 17 anos, onde vivo até hoje.</p>
                    <p className="about-text">Sempre gostei de computadores, tecnologias, internet e jogos. Por isso, terminando o ensino médio comecei a faculdade de analise e desenvolvimento de sistemas.</p>
                    <p className="about-text">A minha grande vontade é poder criar aplicações dinâmicas tendo uma boa usabilidade e utilizando linguagens de alto padrão. </p>
                    <p className="about-text">Sei que é mais fácil falar do que fazer, mas se não eu não sonhar, então a minha vida não terá um objetivo. Para conseguir, sustento meus estudos cada dia mais e exercito as minhas habilidades frequentemente.</p>

                    <div className="about-buttons">
                        <SocialButtons
                            link={"https://www.instagram.com/1gor_matheus/"}
                            name={"Instagram"}
                            className="instagram button"
                            icon={<AiFillInstagram />}
                        />

                        <SocialButtons
                            link={"mailto:igormatheussiquieri@gmail.com"}
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