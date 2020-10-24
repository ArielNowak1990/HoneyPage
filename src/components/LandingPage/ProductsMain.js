import React, {useState} from 'react';
import logo from "../../assets/Logo.png"
import MenuSmall from "./MenuSmall";
import Honey from "./Honey";
import Propolis from "./Propolis";
import Cloud from "./Cloud";
import Alcohol from "./Alcohol";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

function ProductsMain() {
 return (

     <div className={"container_vertical"}>
      <Honey/>
      <Propolis/>
      <Cloud/>
      <Alcohol/>
     </div>

 );
}
export default ProductsMain;