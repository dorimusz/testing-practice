//önmagában véve megállja a helyét, nincs semmilyen dependenciája. itt van egy function, ami kap 3 paramétert.
const testIt = (expected, actual, description) => {
    console.log(description);
    if (expected === actual) console.log("success");
    else console.log("error");
    console.log("-----------")
};

module.exports = testIt;