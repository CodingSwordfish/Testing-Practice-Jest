module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  },

  capitalize: (str) => {
    if (!str) return ''; // Handle empty strings
    return str[0].toUpperCase() + str.slice(1); 
  },

  reverseString: (str) => {
    if (!str) return ''; // Handle empty strings
    return str.split("").reverse().join(""); 
  }
};