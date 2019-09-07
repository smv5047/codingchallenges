// Good morning! Implement four functions called multiply, divide, modulo, and negCheck. The first three functions should multiply, divide, or return the remainder of two arguments after invoking negCheck upon the two numbers.

// Now for the tricky part: you can only use + and - to implement these functions.
// Do not use the JavaScript operators for multiply, divide and modulo: * / %

// The negCheck function needs to indicate whether or not the resulting product, quotient and remainder would be positive or negative. Use a Boolean value to indicate this (you can use the not operator ! to toggle the Boolean value.) negCheck should return an array with that Boolean having converted num1 and num2 into positive integers.

// Hint: divide should drop the remainder.
// NOTE: the test suite will check to see if you are using the * / or % operators. This test will fail if you have commented out code within your functions.




function negCheck (num1, num2) {
    if (num1 <0  || num2<0){
      if (num1 <0 && num2<0){
        return [false, -num1, -num2]
      } else {
        if (num1<0) {
          return [true, -num1, num2]
        } else {
        return [true, num1, -num2]
        }
      }
    } else {
      return [false, num1, num2]
    }
   }



   
   function multiply(x, y) {
     const arr = negCheck(x, y);
     let z = 0
     for (i=0; i<arr[2]; i++){
         z = z + arr[1]
       }
     if (arr[0] === true) {
       return -z
     }  else {
       return z
     }
   }
     



   
   function divide(x, y) {
     const arr = negCheck(x, y);
     let count =0 
     for (i=arr[1]; i>=arr[2]; i=i-arr[2]){
       count = count +1
     }
   
     if (arr[0] === true) {
       return -count
     }  else {
       return count
     }
   }
   



   function modulo(x, y) {
     const arr = negCheck(x, y);
      let count = 0
       let a = arr[1]
       let b = arr[2]
       for (i=arr[1]; i>=arr[2]; i=i-arr[2]){
       a=a-b 
       count = count +1
     }
     if (arr[0] === true) {
       if ( x<0){
       return -a
       }else {
         return a
       }
     }  else {
      if ( x<0){
       return -a
       }else {
         return a
       }
   }
   }

   
   
   console.log(negCheck(12, 34)); 
   console.log(negCheck(-12, 34)); 
   console.log(negCheck(12, -34)); 
   console.log(negCheck(-12, -34)); 
   console.log(multiply(3, 4)); 
   console.log(multiply(-3, 4)); 
   console.log(multiply(3, -4)); 
   console.log(multiply(-3, -4)); 
   console.log(divide(10, 3)); 
   console.log(divide(-10, 3));
   console.log(divide(10, -3)); 
   console.log(divide(-10, -3));
   console.log(divide(-25, -5))
   console.log(modulo(10, 3));
   console.log(modulo(-10, 3));
   console.log(modulo(10, -3)); 
   console.log(modulo(-10, -3)); 