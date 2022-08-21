/* Készíts egy függvényt `summarize` néven.
Ez a paraméterként kapott tetszőleges darabszámú, tetszőleges értékű egész számot összeadja,
és visszatér az összeadás végeredményével. 
A paraméterként kapott értékek egyszerű number típusúak legyenek.
Amennyiben bármelyik paraméter értéke vagy a részeredmény meghaladja a biztonságos tartományt,
automatikusan konvertáljad`BigInt`-be, és természetesen a visszatérési érték is `BigInt` 
típusú */

'use strict';

const summarize = (...numbers) => {
    const intArray = [...numbers].filter((number) => Number.isInteger(number));
    let fixedArray;

    if(intArray.some((number) => !Number.isSafeInteger(number))) {
        fixedArray = intArray.map((number) => BigInt(number));
    } else {
        fixedArray = intArray.map((number) => Number(number));
    }
    
    const sum = fixedArray.reduce((acc, cur) => (acc += cur));

    return Number.isSafeInteger(sum) ? sum : BigInt(sum);
};

export default summarize;
