import React from 'react';
import MenuSmall from "./MenuSmall";
import {Link} from "react-router-dom";
import logo from "../../assets/Logo.png";

function Contact() {
    return (
        <div className={"container_contact"}>
            <div><Link to='/'><img src={logo} alt="logo" className={"logo logo_fixed"}/></Link></div>
            <div className={"contact"}>
                <h3>Dane kontaktowe:</h3>
                <div>Gospodarstwo Pasieczne Kociołek</div>
                <div>Jan Kociołek</div>
                <div>Siedlec 11</div>
                <div>32-744 Lapczyca</div>
                <div>telefon: 663 917 470</div>
                <div>email: pasiekaKociolek@wp.pl</div>
            </div>
            <div className={"contact_form"}>
                <form>
                    <input type="text" placeholder={"podaj imię"}/>
                    <input type="text" placeholder={"podaj mail"}/>
                    <textarea name="message" id="" cols="30" rows="10">Tutaj wpisz treść wiadomości</textarea>
                    <button>WYŚLIJ</button>
                </form>
            </div>
            <div className={"nav"}>
                <MenuSmall/>
            </div>
        </div>
    );
}

export default Contact;