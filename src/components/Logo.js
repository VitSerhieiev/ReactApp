import React from "react";
import { TbArrowsDiff } from "react-icons/tb";

class Logo extends React.Component {

render() {
    return (
        <div className="logo-wrapper">
            <a href="#header">
                <TbArrowsDiff className="logo" />
                <h1 className="logo-name">Обмін валют</h1>
            </a>
        </div>
        )
    }
}

export default Logo;