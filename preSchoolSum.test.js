const preSchoolSum = require('./preSchoolSum');

test('10 alatti egész eredménynél magát a számot kapjuk', () => {
    expect(preSchoolSum(4, 4)).toBe(8);
});

test('0-nál kisebb eredmény esetén 0-t ad vissza', () => {
    expect(preSchoolSum(-14, 4)).toBe(0);
});
