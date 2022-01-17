//ez egy olyan fájl, ahova egymástól teljesen független fájlokat importáltam
const preSchoolSum = require("./preSchoolSum");
const testIt = require("./myTestLibrary")

/*
console.log(preSchoolSum(1, 3));
console.log(preSchoolSum(11, 3));
console.log(preSchoolSum(1, -3));
console.log(preSchoolSum(1, 4.5));
console.log(preSchoolSum(4.9, 2));
console.log(preSchoolSum(4.1, 2));
*/
testIt(8, preSchoolSum(4, 4), "10 alatti egész eredménynél magát a számot kapjuk")
testIt(0, preSchoolSum(-14, 4), "0-nál kisebb eredmény esetén 0-t ad vissza")
testIt("sok", preSchoolSum(14, 4), "10 feletti eredmény esetén visszaadja a 'sok' szöveget")
testIt(10, preSchoolSum(6, 4), "10-et ad vissza, mert 10-et kell neki(a megadott egész számok összege 10 alatt van)")