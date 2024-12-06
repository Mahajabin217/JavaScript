// How to Find Out Mile To Kilometer:

function mileToKilo(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

function KiloToMile(kilo) {
    const mile = kilo * 0.621371;
    return mile;
}

const ans1 = mileToKilo(32);
console.log(ans1);

const ans2 = KiloToMile(22);
console.log(ans2);

/* Output: 51.49888
           13.670162
*/