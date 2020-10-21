import React, {useState} from 'react';
import Carousel from "./Carousel";
import logo from "../../assets/Logo.png"
import MenuSmall from "./MenuSmall";

function HomeHeads() {
    const [counters, setCounters] = useState([0,0,0])

    const handleProductMain =()=> {
    let counter = [...counters]
    if (counter[0] === 0) {counter[0]=1} else {counter[0]=0}
    counter[1] = 0;
    counter[2] = 0;
    setCounters([...counter])
    }
    const handleProductBee =()=> {
        let counter = [...counters]
        if (counter[1] === 0) {counter[1]=1} else {counter[1]=0}
        counter[0] = 0;
        counter[2] = 0;
        setCounters([...counter])
    }
    const handleProductOther =()=> {
        let counter = [...counters]
        if (counter[2] === 0) {counter[2]=1} else {counter[2]=0}
        counter[1] = 0;
        counter[0] = 0;
        setCounters([...counter])
    }

 return (
     <header>
       <div className={"logo_name"}>
        <div><img src={logo} alt="logo" className={"logo"}/></div>
        <h3><span>P</span>ASIEKA <span>K</span>OCIOLEK</h3>
       </div>
       <Carousel/>
       <div className={"nav"}>
           <ul className={"menu"}>
               <ul className={"menu_productMain"} onClick={handleProductMain}>PRODUKTY PSZCZELE</ul>
               <ul className={"menu_productBee"} onClick={handleProductBee}>HODOWLA PSZCZÓL</ul>
               <ul className={"menu_productOther"} onClick={handleProductOther}>INNE PRODUKTY</ul>
               <ul className={"menu_aboutUs"}>O NASZEJ PASIECE</ul>
               <ul className={"menu_contact"}>KONTAKT</ul>
           </ul>
           <MenuSmall counters={counters}/>
       </div>
     </header>
 );
}
export default HomeHeads;