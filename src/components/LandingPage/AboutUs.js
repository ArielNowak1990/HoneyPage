import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/Logo.png";
import MenuSmall from "./MenuSmall";
import Maps from '../../scss/assets/maps.jpg'

function AboutUs() {

    return (
        <div className={"container_aboutUs"}>
            <div><Link to='/'><img src={logo} alt="logo" className={"logo logo_fixed"}/></Link></div>
            <div className={"maps"}>
                <img src={Maps} alt="Mapa google"/>
                <div>Pasieka zlokalizowana jest w spokojnej i zalesionej okolicy. Nasze pszczoły korzystają z najlepszych,
                najkwiatowszych łąk w okolicy. </div>
            </div>
            <div className={"maps"}>
                <img src={Maps} alt="Mapa google"/>
                <div>Wywożone przez nas ule korzystają z następujących miejscówek do zbierania miody: </div>
            </div>
            <div className={"maps"}>
                <img src={Maps} alt="Mapa google"/>
                <div>A oto nasza pasieka:</div>
            </div>
            <div className={"nav"}>
                <MenuSmall/>
            </div>
        </div>
    );
}

export default AboutUs;