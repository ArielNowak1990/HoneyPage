import React from 'react';
import MenuSmall from "./MenuSmall";
import {Link} from "react-router-dom";
import logo from "../../assets/Logo.png";

function Contact() {
    return (
        <div className={"container_contact"}>
            <div><Link to='/'><img src={logo} alt="logo" className={"logo logo_fixed"}/></Link></div>
            <div className={"logo_name"}><h3><span>P</span>ASIEKA <span>K</span>OCIOLEK</h3></div>
            <div className={"contact"}>
                <div className={"contact_date"}>
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
                        <h3>Napisz do nas !</h3>
                        <input type="text" placeholder={"Twoje Imię"}/>
                        <input type="text" placeholder={"Adres email"}/>
                        <textarea name="message" id="">Tutaj wpisz treść wiadomości</textarea>
                        <button>WYŚLIJ</button>
                    </form>
                </div>
            </div>
            <div className={"nav"}>
                <MenuSmall/>
            </div>
        </div>
    );
}

export default Contact;