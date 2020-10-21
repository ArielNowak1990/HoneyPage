import React, { useState } from 'react';

function MenuSmall({counters}) {

    if (counters[0]===0 && counters[1]===0 && counters[2]===0) {
        return (
            <ul className={"menu_small none"}>
            </ul>
        );
    } else

    if (counters[0]===1 && counters[1]===0 && counters[2]===0) {
        return (
            <ul className={"menu_small"}>
                <ul className={"menu_small_productMain"}>
                    <li>MIODY</li>
                    <li>PROPOLIS</li>
                    <li>PYLEK</li>
                    <li>PRZEGRYZKA WYSKOKOWA</li>
                </ul>
            </ul>
        );
    } else

    if (counters[0]===0 && counters[1]===1 && counters[2]===0) {
        return (
            <ul className={"menu_small"}>
                <ul className={"menu_small_productBee"}>
                    <li>MATKI PSZCZELE</li>
                    <li>ODKLADY</li>
                    <li>RODZINY PRZEZIMOWANE</li>
                </ul>
            </ul>
        );
    } else

    if (counters[0]===0 && counters[1]===0 && counters[2]===1) {
        return (
            <ul className={"menu_small"}>
                <ul className={"menu_small_productOther"}>
                    <li>ULE POLIURETANOWE</li>
                    <li>KARMNIKI</li>
                </ul>
            </ul>
        );
    }
    else
        return (
            <div>
                <ul className={"menu_small "}>
                    <ul className={"menu_small_productOther"}>
                        <li>coś poszło nie tak... spróbuj odświeżyć</li>
                    </ul>
                </ul>
            </div>
        )

}
export default MenuSmall;