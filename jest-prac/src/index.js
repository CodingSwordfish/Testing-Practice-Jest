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
  },

  caesarCipher:(text, shift) =>{
    return text
      .split('')
      .map((char) => {
        const isUpperCase = char === char.toUpperCase();
        const code = char.charCodeAt(0);
  
        // Check if the character is alphabetical
        if (
          (code >= 65 && code <= 90) || // Uppercase letters
          (code >= 97 && code <= 122) // Lowercase letters
        ) {
          const base = isUpperCase ? 65 : 97;
          const shiftedCode = (code - base + shift) % 26 + base;
          return isUpperCase
            ? String.fromCharCode(shiftedCode)
            : String.fromCharCode(shiftedCode).toLowerCase();
        } else {
          // Leave non-alphabetical characters unchanged
          return char;
        }
      })
      .join('');
  }
  
  
}
