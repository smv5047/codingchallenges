// Good morning! Today we will be emulating "logic gates" with JavaScript. Our functions will emulate the "not", "and", "not and", inclusive "or" and exclusive or "xor" operators.

// For your emulation functions, you limited to only using the deep equality operator === and if (conditional) {statements}
// Do not use !, &&, or ||.
// Do not use the functions you have created to emulate any of the other logic gates, e.g. don't use your NOT() function in the NAND() function.

// Your NOT() function only takes one parameter.
// Your other functions will take two inputs and return a Boolean value which corresponds to the conditions satisfied by their logical operator.

function NOT (b) {
    if (b === true) {
      return false
    } else {
      return true
    }
  }
  
  function AND (x, y) {
    if(x === true){
      if(y === true){
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  
  function NAND(x, y) {
    if(x === true) {
      if( y === true) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }
  
  function OR(x, y) {
    if (x === true) {
      if (y === true) {
        return true
      } else {
        return true
      }
    } else {
      if (y === true) {
        return true
      } else {
        return false
    }
    }
  }
  
  function XOR(x, y) {
      if (x === true) {
        if (y === true) {
          return false
        } else {
          return true
        }
      } else {
        if (y === true) {
          return true
        } else {
          return false
      }
    }
  }
  
  
  console.log(NOT(true)) // ---> false
  console.log(AND(true, true));   // ---> true
  console.log(AND(true, false));  // ---> false
  console.log(AND(false, true));  // ---> false
  console.log(AND(false, false)); // ---> false
  console.log(NAND(true, false));  // ---> true
  console.log(OR(false, true));  // ---> true
  console.log(XOR(true, true)); // ---> false