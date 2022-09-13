import React from "react";
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiReact } from 'react-icons/di';
import { SiJavascript, SiBootstrap, SiVisualstudio } from 'react-icons/si';
import { BsWordpress } from 'react-icons/bs';
import TechnologyCard from "../TechnologyCard";

import './styles.sass';
import Divider from "../Divider";

const TechnologiesContainer = () => {
    return (
        <section id="technologies-container">
            <div className="technologies-wrapper">
                <div className="technologies-col-1">
                    <h1 className="technologies-title">Tecnologias</h1>
                    <Divider
                        backgroundColor={"#1890e0"}
                    />
                    <p className="technologies-context">Apresento aqui as linguagens, plataformas e ferramentas que tenho experiências com desenvolvimento. Todo dia estudo para me aperfeiçoar.</p>
                    <p className="technologies-context">Tenho algumas dificuldades referente a linguagem ReactJs. Com o objetivo de encarar este problema de frente, estou desenvolvendo este portfolio próprio, pois acredito que a prática leva à perfeição.</p>
                    <p className="technologies-context">Espero que o meu desenvolvimento técnico e pessoal seja notado ao longo do tempo e espero que eu possa colocar em prática o que eu aprendi como front-end e como pessoa.</p>

                </div>
                <div className="technologies-col-2">
                    <TechnologyCard
                        technologyIcon={<AiFillHtml5 />}
                        technologyClass="html"
                        technologyText={"HTML5"}
                    />

                    <TechnologyCard
                        technologyIcon={<DiCss3 />}
                        technologyText={"CSS"}
                        technologyClass="css"
                    />

                    <TechnologyCard
                        technologyIcon={<SiJavascript />}
                        technologyText={"JavaScript"}
                        technologyClass="javascript"
                    />

                    <TechnologyCard
                        technologyIcon={<DiSass />}
                        technologyText={"Sass"}
                        technologyClass="sass"
                    />

                    <TechnologyCard
                        technologyIcon={<BsWordpress />}
                        technologyText={"WordPress"}
                        technologyClass="wordpress"
                    />

                    <TechnologyCard
                        technologyIcon={<DiReact />}
                        technologyText={"ReactJS"}
                        technologyClass="reactjs"
                    />

                    <TechnologyCard
                        technologyIcon={<AiFillGithub />}
                        technologyText={"GitHub"}
                        technologyClass="github"
                    />

                    <TechnologyCard
                        technologyIcon={<SiBootstrap />}
                        technologyText={"Bootstrap"}
                        technologyClass="bootstrap"
                    />

                    <TechnologyCard
                        technologyIcon={<SiVisualstudio />}
                        technologyText={"VisualStudio"}
                        technologyClass="visualstudio"
                    />
                </div>
            </div>
        </section>
    );
};

export default TechnologiesContainer;