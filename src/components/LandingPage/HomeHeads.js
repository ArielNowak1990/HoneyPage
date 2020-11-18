import React, {useState} from 'react';
import Carousel from "./Carousel";
import logo from "../../assets/Logo.png"
import MenuSmall from "./MenuSmall";


function HomeHeads() {

    const [counters, setCounters] = useState([0])

    const handleShowMenu =()=> {
        let counter = [...counters]
        if (counter[0] === 0) {counter[0]=1} else {counter[0]=0}
        setCounters([...counter])
    }
    if (counters[0]===0){
 return (
     <header>
       <div className={"logo_name"}>
        <div><img src={logo} alt="logo" className={"logo"}/></div>
        <h3><span>P</span>ASIEKA <span>K</span>OCIOLEK</h3>
       </div>
       <Carousel/>
       <div className={"tablet_desktop"}>
       <div className={"nav"}>
           <MenuSmall/>
       </div>
       </div>
         <div className={"mobile"}>
         <div className={"nav hidden"}>
             <MenuSmall/>
         </div>
         <div onClick={handleShowMenu} className={"qube_show"}/>
         </div>
     </header>
 )};
    if (counters[0]===1){
        return (
            <header>
                <div className={"logo_name"}>
                    <div><img src={logo} alt="logo" className={"logo"}/></div>
                    <h3><span>P</span>ASIEKA <span>K</span>OCIOLEK</h3>
                </div>
                <Carousel/>
                <div className={"tablet_desktop"}>
                    <div className={"nav"}>
                        <MenuSmall/>
                    </div>
                </div>
                <div className={"mobile"}>
                    <div className={"nav"}>
                        <MenuSmall/>
                    </div>
                    <div onClick={handleShowMenu} className={"qube_hidden"}/>
                </div>
            </header>
        )};
}
export default HomeHeads;