import React from "react";

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiWordpress
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass"

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "react", name: "ReactJS", icon: <DiReact /> },
    { id: "wordpress", name: "WordPress", icon: <DiWordpress /> },
]

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((item) => (
                    <div className="technology-card" id={item.id} key={item.id}>
                        <h3>{item.name}</h3>
                        <div>{item.icon}</div>
                    </div>
                ))};
            </div>
        </section>
    );
};

export default TechnologiesContainer;