//Write a function which counts the number of vowels in a given string. Return the count number.
function vowelCount(str) {
    let newArray = []
    let newString = str.toLowerCase()
    newArray = newString.split("")
    let vowelNum = 0
    for (let i=0; i<newArray.length; i++) {
      if (newArray[i] ==  "a" || newArray[i] ==  "e" || newArray[i] ==  "i" || newArray[i] ==  "o" || newArray[i] ==  "u") {
        vowelNum = vowelNum+1
      }
    }
    
    return vowelNum
  }
  
  
  console.log(vowelCount("Hello World"));