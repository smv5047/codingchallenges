// Good morning! Write a function called sumOfDigits. When given a positive integer, sumOfDigits returns the sum of its digits. Assume all numbers will be positive.

// For Example:
// console.log(sumOfDigits(23));  // <--- 5
// console.log(sumOfDigits(496)); // <--- 19

// sumOfDigits(23) returns 5 because 2 + 3 = 5
// sumOfDigits(496) returns 19 because 4 + 9 + 6 = 19

function sumOfDigits(num) {
    let newNum = num.toString()
    
    newerNum = newNum.split("")
    console.log(newerNum)
    let newestNum = 0
    for (i=0; i<newerNum.length; i++) {
      let newishNum = parseInt(newerNum[i])
      newestNum = newestNum + newishNum
    }
    return newestNum
  }
  
  console.log(sumOfDigits(23))
  console.log(sumOfDigits(496))