import React, { useState } from 'react';
import MenuSmall from "./MenuSmall";
import {Link} from "react-router-dom";
import logo from "../../assets/Logo.png";
function Contact() {
 return (
  <div className={"container_contact"}>
      <div><Link to='/'><img src={logo} alt="logo" className={"logo logo_fixed"}/></Link></div>
   To jest okno Kontakt
      <div className={"nav"}>
          <MenuSmall/>
      </div>
  </div>
 );
}
export default Contact;