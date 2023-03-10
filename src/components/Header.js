import React from "react";
import Logo from "./Logo";
import "../css/main.css"
import Price from "./Price";


class Header extends React.Component {
render() {
    return (
        <header id="header" className="header">
            <div className="container header-wrapper">
                <Logo />
                <Price />
            </div>
        </header>
        )
    }
}

export default Header;