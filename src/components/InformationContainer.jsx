import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import "../styles/components/informationcontainer.sass";

const information = [
    { name: <AiFillPhone />, text: "Telefone", content: "(45)9 9943-1951" },
    { name: <AiOutlineMail />, text: "E-mail", content: "igormatheussiquieri@gmail.com" },
    { name: <AiFillEnvironment id="" />, text: "Localização", content: "Toledo - PR" }
]

const InformationContainer = () => {
    return (
        <section id="information">
            {information.map((item) => (
                <div className="info-card">
                    {item.name}
                    <div>
                        <h3>{item.text}</h3>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))};
        </section>
    );
};

export default InformationContainer; 