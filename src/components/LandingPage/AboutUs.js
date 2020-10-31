import React, { useState } from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/Logo.png";
import MenuSmall from "./MenuSmall";
function AboutUs() {
    return (
        <div className={"container_aboutUs"}>
            <div><Link to='/'><img src={logo} alt="logo" className={"logo logo_fixed"}/></Link></div>
            To jest okno aboutUS
            <div className={"nav"}>
                <MenuSmall/>
            </div>
        </div>
    );
}
export default AboutUs;