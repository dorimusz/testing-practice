const testIt = (expected, actual, description) => {
    console.log(description);
    if (expected == actual) return "success";
    else return "error"
}

console.log(testIt(2, 3, "cso"));
console.log(testIt(2, 2, "cso"));
console.log(testIt("2", 2, "cso"));
console.log(testIt(false, true, "cso"));