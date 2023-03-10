import React from "react";
import "../css/main.css"


class Map extends React.Component {
render() {
    return (
        <div className="ourmap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1248.519467418951!2d35.04962735148324!3d48.465727852894275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2c2b61eecc1%3A0xe9c178ab164b0771!2z0J7QsdC80LXQvSDQstCw0LvRjtGCIGN1cnJlbmN5IGV4Y2hhbmdlIFRNVCDQv9GA0L7QtNCw0YLRjCDQsdC40YLQutC-0LjQvSDQutGD0L_QuNGC0Ywg0LHQuNGC0LrQvtC40L0!5e0!3m2!1sru!2sua!4v1678430399385!5m2!1sru!2sua"
            className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        )
    }
}

export default Map;







