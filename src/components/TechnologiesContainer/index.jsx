import React from "react";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiSass } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import TechnologyCard from "../TechnologyCard";

import './styles.sass';

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <div className="technologies-wrapper">
                <h2 className="technologies-title">Tecnologias</h2>
                <div className="technologies-content">
                    <TechnologyCard
                        technologyIcon={<AiFillHtml5 />}
                        technologyClass="html"
                        technologyText={"HTML5"}
                        technologySubtitle={"HTML"}
                    />

                    <TechnologyCard
                        technologyIcon={<DiCss3 />}
                        technologyText={"CSS"}
                        technologyClass="css"
                        technologySubtitle={"CSS"}
                    />

                    <TechnologyCard
                        technologyIcon={<SiJavascript />}
                        technologyText={"JavaScript"}
                        technologyClass="javascript"
                        technologySubtitle={"JavaScript"}
                    />

                    <TechnologyCard
                        technologyIcon={<DiSass />}
                        technologyText={"Sass"}
                        technologyClass="sass"
                        technologySubtitle={"Sass"}
                    />

                    <TechnologyCard
                        technologyIcon={<DiSass />}
                        technologyText={"WordPress"}
                        technologyClass="wordpress"
                        technologySubtitle={"WordPress"}
                    />
                </div>
            </div>
        </section>
    );
};

export default TechnologiesContainer;