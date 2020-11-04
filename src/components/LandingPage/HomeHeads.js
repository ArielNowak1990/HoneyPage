import React from 'react';
import Carousel from "./Carousel";
import logo from "../../assets/Logo.png"
import MenuSmall from "./MenuSmall";

function HomeHeads() {


 return (
     <header>
       <div className={"logo_name"}>
        <div><img src={logo} alt="logo" className={"logo"}/></div>
        <h3><span>P</span>ASIEKA <span>K</span>OCIOLEK</h3>
       </div>
       <Carousel/>
       <div className={"nav"}>
           <MenuSmall/>
       </div>
     </header>
 );
}
export default HomeHeads;