import React from "react";
import "../css/main.css"


class Links extends React.Component {
render() {
    return (
        <div className="navigatotion">
            <ul className="link-list">
                <li className="link">
                    <a href="mailto:test@gmail.com" target="_blank" rel="noopener noreferrer" className="link-item">
                        Напиши нам 
                    </a>
                </li>
                <li className="link">
                    <a href="https://bank.gov.ua/" target="_blank" rel="noopener noreferrer" className="link-item">
                        Офіційний сайт НБУ
                    </a>
                </li>
                <li className="link">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="link-item">
                        Ми в телеграм!
                    </a>
                </li>
            </ul>
        </div>
        )
    }
}

export default Links;