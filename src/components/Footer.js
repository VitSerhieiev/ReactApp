import React from "react";
import Logo from "./Logo";
import "../css/main.css"
import Map from "./Map";
import Links from "./Links"

class Footer extends React.Component {
render() {
    return (
        <footer className="footer">
            <div className="container footer-wrapper">
                <Logo />
                <Links />
                <Map />
            </div>
        </footer>
        )
    }
}

export default Footer;