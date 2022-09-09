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
                    <p className="about-text">Meu nome é Igor, tenho 24 anos e sou natural de Umuarama e cresci em Guaíra. Me mudei para Toledo com 17 anos, onde vivo até hoje.</p>
                    <p className="about-text">Sempre gostei de computadores, tecnologias, internet e jogos. Por isso, terminando o ensino médio comecei a faculdade de analise e desenvolvimento de sistemas.</p>
                    <p className="about-text">Em 2020 tive a oportunidade de iniciar como desenvolvedor front-end, onde aprendi muitas coisas novas e conforme o tempo foi passando minha mente foi se abrindo para experiencias diferentes com o desenvolvimento web.</p>
                    <p className="about-text">Tenho algumas dificuldades referente a linguagem Reactjs. Com o objetivo de encarar este problema de frente, estou desenvolvendo este portfolio próprio, pois acredito que a prática leva à perfeição. Espero que o meu desenvolvimento técnico e pessoal seja notado ao longo do tempo e espero que eu possa colocar em prática o que eu aprendi como front-end e como pessoa.</p>

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