//önmagában véve megállja a helyét, nincs semmilyen dependenciája. itt van egy function, ami kap 2 paramétert.
//üzleti logika
console.log("Hello, world!")

const preSchoolSum = (num1, num2) => {
    //return 100; //nem lesz jó a teszt
    if (num1 + num2 < 0) return 0;
    if (num1 + num2 > 10) return "sok";
    // if (num1 + num2 >= 10) return "sok"; // itt a tesztem dobni fogja az errort
    else return Math.trunc(num1 + num2);

    // else return Math.floor(num1 + num2);
}

module.exports = preSchoolSum;