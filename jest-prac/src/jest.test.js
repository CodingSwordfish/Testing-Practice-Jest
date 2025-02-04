const compMod = require('./index');


test("takes a string and returns it with the first character capitalized", () => {
  expect(compMod.capitalize("bryan")).toBe("Bryan");
  expect(compMod.capitalize("")).toBe(""); // Test empty string case
});

test("reverse a string", () => {
  expect(compMod.reverseString("bryan")).toBe("nayrb");
  expect(compMod.reverseString("")).toBe(""); // Test empty string case
});


test("add 6 + 3 to equal 9", () => {
  expect(compMod.add(6,3)).toBe(9);
 
});

test("minus 6 - 3 to equal 3", () => {
  expect(compMod.subtract(6,3)).toBe(3);
 
});

test("times 6 * 3 to equal 18", () => {
  expect(compMod.multiply(6,3)).toBe(18);
 
});

test("divide 6 / 3 to equal 2", () => {
  expect(compMod.divide(6,3)).toBe(2);
 
});


