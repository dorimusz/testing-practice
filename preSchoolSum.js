console.log("Hello, world!")

const preSchoolSum = (num1, num2) => {
    if (num1 + num2 < 0) return 0;
    if (num1 + num2 > 10) return "sok";
    else return Math.trunc(num1 + num2);

    // else return Math.floor(num1 + num2);
}

module.exports = preSchoolSum;
