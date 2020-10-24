import React, { useState } from 'react';

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
                    <li>MIODY</li>
                    <li>PROPOLIS</li>
                    <li>PYLEK</li>
                    <li>PRZEGRYZKA WYSKOKOWA</li>
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
                    <li>MATKI PSZCZELE</li>
                    <li>ODKLADY</li>
                    <li>RODZINY PRZEZIMOWANE</li>
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
                    <li>ULE POLIURETANOWE</li>
                    <li>KARMNIKI</li>
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