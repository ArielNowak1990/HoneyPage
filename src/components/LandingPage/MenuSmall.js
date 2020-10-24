import React, { useState } from 'react';
import {Link} from "react-router-dom";

function MenuSmall() {

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

    if (counters[0]===0 && counters[1]===0 && counters[2]===0) {
        return (
            <>
            <ul className={"menu"}>
                <ul className={"menu_productMain"} onClick={handleProductMain}>PRODUKTY PSZCZELE</ul>
                <ul className={"menu_productBee"} onClick={handleProductBee}>HODOWLA PSZCZÓL</ul>
                <ul className={"menu_productOther"} onClick={handleProductOther}>INNE PRODUKTY</ul>
                <ul className={"menu_aboutUs"}>O NASZEJ PASIECE</ul>
                <ul className={"menu_contact"}>KONTAKT</ul>
            </ul>
            <ul className={"menu_small none"}>
            </ul>
                </>
        );
    } else

    if (counters[0]===1 && counters[1]===0 && counters[2]===0) {
        return (
            <>
            <ul className={"menu"}>
                <ul className={"menu_productMain active"} onClick={handleProductMain}>PRODUKTY PSZCZELE</ul>
                <ul className={"menu_productBee"} onClick={handleProductBee}>HODOWLA PSZCZÓL</ul>
                <ul className={"menu_productOther"} onClick={handleProductOther}>INNE PRODUKTY</ul>
                <ul className={"menu_aboutUs"}>O NASZEJ PASIECE</ul>
                <ul className={"menu_contact"}>KONTAKT</ul>
            </ul>
            <ul className={"menu_small"}>
                <ul className={"menu_small_productMain"}>
                    <li><Link to='/productsMain/#honey'>MIODY</Link></li>
                    <li><Link to='/productsMain/#propolis'>PROPOLIS</Link></li>
                    <li><Link to='/productsMain/#cloud'>PYLEK</Link></li>
                    <li><Link to='/productsMain/#alcohol'>PRZEGRYZKA WYSKOKOWA</Link></li>
                </ul>
            </ul>
                </>
        );
    } else

    if (counters[0]===0 && counters[1]===1 && counters[2]===0) {
        return (
            <>
            <ul className={"menu"}>
                <ul className={"menu_productMain"} onClick={handleProductMain}>PRODUKTY PSZCZELE</ul>
                <ul className={"menu_productBee active"} onClick={handleProductBee}>HODOWLA PSZCZÓL</ul>
                <ul className={"menu_productOther"} onClick={handleProductOther}>INNE PRODUKTY</ul>
                <ul className={"menu_aboutUs"}>O NASZEJ PASIECE</ul>
                <ul className={"menu_contact"}>KONTAKT</ul>
            </ul>
            <ul className={"menu_small"}>
                <ul className={"menu_small_productBee"}>
                    <li><Link to='/productsMain/#honey'>MATKI PSZCZELE</Link></li>
                    <li><Link to='/productsMain/#honey'>ODKLADY</Link></li>
                    <li><Link to='/productsMain/#honey'>RODZINY PRZEZIMOWANE</Link></li>
                </ul>
            </ul>
                </>
        );
    } else

    if (counters[0]===0 && counters[1]===0 && counters[2]===1) {
        return (
            <>
            <ul className={"menu"}>
                <ul className={"menu_productMain"} onClick={handleProductMain}>PRODUKTY PSZCZELE</ul>
                <ul className={"menu_productBee"} onClick={handleProductBee}>HODOWLA PSZCZÓL</ul>
                <ul className={"menu_productOther active"} onClick={handleProductOther}>INNE PRODUKTY</ul>
                <ul className={"menu_aboutUs"}>O NASZEJ PASIECE</ul>
                <ul className={"menu_contact"}>KONTAKT</ul>
            </ul>
            <ul className={"menu_small"}>
                <ul className={"menu_small_productOther"}>
                    <li><Link to='/productsMain/#honey'>ULE POLIURETANOWE</Link></li>
                    <li><Link to='/productsMain/#honey'>KARMNIKI</Link></li>
                </ul>
            </ul>
                </>
        );
    }
    else
        return (
            <>
                <ul className={"menu"}>
                    <ul className={"menu_productMain"} onClick={handleProductMain}>PRODUKTY PSZCZELE</ul>
                    <ul className={"menu_productBee"} onClick={handleProductBee}>HODOWLA PSZCZÓL</ul>
                    <ul className={"menu_productOther"} onClick={handleProductOther}>INNE PRODUKTY</ul>
                    <ul className={"menu_aboutUs"}>O NASZEJ PASIECE</ul>
                    <ul className={"menu_contact"}>KONTAKT</ul>
                </ul>
            <div>
                <ul className={"menu_small "}>
                    <ul className={"menu_small_productOther"}>
                        <li>coś poszło nie tak... spróbuj odświeżyć</li>
                    </ul>
                </ul>
            </div>
                </>
        )

}
export default MenuSmall;