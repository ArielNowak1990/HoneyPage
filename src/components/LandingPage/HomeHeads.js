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
               <ul>PRODUKTY PSZCZELE
                    <li>Miody</li>
                    <li>Propolis</li>
                    <li>Pyłek</li>
                    <li>Przegryzka wyskokowa</li></ul>
               <ul>HODOWLA PSZCZÓL
                    <li>Matki pszczele</li>
                    <li>Odkłady</li>
                    <li>Rodziny Przezimowane</li></ul>
               <ul>INNE PRODUKTY
                   <li>Ule poliuretanowe</li>
                   <li>Karmniki</li></ul>
               <ul>O NASZEJ PASIECE</ul>
               <ul>KONTAKT</ul>
           </ul>
       </div>
     </header>
 );
}
export default HomeHeads;