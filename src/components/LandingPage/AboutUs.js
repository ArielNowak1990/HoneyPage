import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/Logo.png";
import MenuSmall from "./MenuSmall";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function AboutUs() {

        var apiKey = {lat: 40.854885, lng: -88.081807};

    return (
        <div className={"container_aboutUs"}>
            <div><Link to='/'><img src={logo} alt="logo" className={"logo logo_fixed"}/></Link></div>
            To jest okno aboutUS
            <div className={"maps"}>
                <Map google={apiKey} zoom={14}/>
                {/*<Map google={{*/}
                {/*    lat: -25.363,*/}
                {/*    lng: -88.081807*/}
                {/*}} initialCenter={{*/}
                {/*    lat: -25.363,*/}
                {/*    lng: -88.081807*/}
                {/*}} zoom={4}/>*/}
            </div>
            <div className={"nav"}>
                <MenuSmall/>
            </div>
        </div>
    );
}

export default AboutUs;