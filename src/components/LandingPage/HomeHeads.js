import React from 'react';
import Carousel from "./Carousel";
import logo from "../../assets/Logo.png"

function HomeHeads() {
 return (
     <header>
       <div className={"logo_name"}>
        <div><img src={logo} alt="logo" className={"logo"}/></div>
        <h3><span>P</span>ASIEKA <span>K</span>OCIOLEK</h3>
       </div>
       <Carousel/>
       <div className={"nav"}>
           <ul className={"menu"}>
               <ul>PRODUKTY PSZCZELE</ul>

               <ul>HODOWLA PSZCZÓL</ul>
               <ul>INNE PRODUKTY</ul>
               <ul>O NASZEJ PASIECE</ul>
               <ul>KONTAKT</ul>
           </ul>
       </div>
     </header>
 );
}
export default HomeHeads;