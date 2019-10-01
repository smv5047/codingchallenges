// Good morning! Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value:

// toBinaryString(6) should return "110" (no leading 0).

// Use of the native method number.toString(2);  is disallowed.

function toBinaryString(number) {
 
    let binaryString = "0"
   
  
    if (number>1) {
      let x = number%2
      binaryString =  x + binaryString
    } 
    if (number>1) {
      let x = number%2
      binaryString =  x + binaryString
    } 
  
    
    return binaryString
  }
  
  
  
  
  
  console.log(toBinaryString(5));  // <--- 101