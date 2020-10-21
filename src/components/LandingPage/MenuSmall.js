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
                    <li>Miody</li>
                    <li>Propolis</li>
                    <li>Pyłek</li>
                    <li>Przegryzka wyskokowa</li>
                </ul>
            </ul>
        );
    } else

    if (counters[0]===0 && counters[1]===1 && counters[2]===0) {
        return (
            <ul className={"menu_small"}>
                <ul className={"menu_small_productBee"}>
                    <li>Matki pszczele</li>
                    <li>Odkłady</li>
                    <li>Rodziny Przezimowane</li>
                </ul>
            </ul>
        );
    } else

    if (counters[0]===0 && counters[1]===0 && counters[2]===1) {
        return (
            <ul className={"menu_small"}>
                <ul className={"menu_small_productOther"}>
                    <li>Ule poliuretanowe</li>
                    <li>Karmniki</li>
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