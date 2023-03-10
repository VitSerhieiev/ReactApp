import React from "react";
import "../css/main.css"
import Form from "./Form";

class Main extends React.Component {
render() {
    return (
        <main className="main">
            <div className="container">
                <h2 className="main-title">Обмін валюти</h2>
                <span className="main-span">Зверніть увагу курс може змінюватись впродовж дня!</span>
                <div className="form-block">
                    <h3 className="form-title">Розрахунок</h3>
                    <Form />
                </div>
            </div>
        </main>
        )
    }
}
    
export default Main;
