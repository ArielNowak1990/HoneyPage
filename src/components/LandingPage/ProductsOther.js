import React, { useState } from 'react';
import Honey from "./Honey";
import Propolis from "./Propolis";
import Cloud from "./Cloud";
import Alcohol from "./Alcohol";
import MenuSmall from "./MenuSmall";
import {Link} from "react-router-dom";
import logo from "../../assets/Logo.png";
import Hotel from "./Hotel";
import Poliuretanowe from "./Poliuretanowe";
function ProductsOther() {
 const [counters, setCounters] = useState([0])

 const handleShowMenu =()=> {
  let counter = [...counters]
  if (counter[0] === 0) {counter[0]=1} else {counter[0]=0}
  setCounters([...counter])
 }
 if (counters[0]===0){
  return (
      <div className={"container_vertical"}>
       <Hotel/>
       <Poliuretanowe/>
       <div className={"nav hidden"}>
        <MenuSmall/>
       </div>
       <div><Link to='/'><img src={logo} alt="logo" className={"logo logo_fixed"}/></Link></div>
       <div onClick={handleShowMenu} className={"qube_show"}/>
      </div>
  );
 }
 if (counters[0]===1){
  return (
      <div className={"container_vertical"}>
          <Hotel/>
          <Poliuretanowe/>
       <div className={"nav"}>
        <MenuSmall/>
       </div>
       <div><Link to='/'><img src={logo} alt="logo" className={"logo logo_fixed"}/></Link></div>
       <div onClick={handleShowMenu} className={"qube_hidden"}/>
      </div>
  );
 }

}
export default ProductsOther;