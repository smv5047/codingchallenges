// Good morning! Define a function that takes in a positive integer and returns the Roman Numeral representation of that number.  

//Updated
function romanNumeralize(n) {
    let roman = []
    let remainder = n
  
    // If statement checks to see if the argument is great then 1000, if so it converts it to the appropriate Roman Numeral
    if (n >= 1000) {
      let m = Math.floor(n/1000)
      for (let i=0; i<m;i++){
        roman.push("M")
        remainder=remainder-1000
      }
    }
    
    if (remainder >= 900) {
      let cm = Math.floor(remainder/900)
      for (let i=0; i<cm;i++){
        roman.push("CM")
        remainder = remainder -900
      }
    }
    
    if (remainder >= 500) {
      let d = Math.floor(remainder/500)
      for (let i=0; i<d;i++){
        roman.push("D")
        remainder = remainder -500
      }
    }
    
    if (remainder >= 400) {
      let cd = Math.floor(remainder/400)
      for (let i=0; i<cd;i++){
        roman.push("CD")
        remainder = remainder -400
      }
    }
    
      if (remainder >= 100) {
      let c = Math.floor(remainder/100)
      for (let i=0; i<c;i++){
        roman.push("C")
        remainder = remainder -100
      }
    }
    
    if (remainder >= 90) {
      let xc = Math.floor(remainder/90)
      for (let i=0; i<xc;i++){
        roman.push("XC")
        remainder = remainder -90
      }
    }
    
    if (remainder >= 50) {
      let l = Math.floor(remainder/50)
      for (let i=0; i<l;i++){
        roman.push("L")
        remainder = remainder -50
      }
    }
    
    if (remainder >= 40) {
      let l = Math.floor(remainder/40)
      for (let i=0; i<l;i++){
        roman.push("XL")
        remainder = remainder -40
      }
    }
    
    if (remainder >= 10) {
      let x = Math.floor(remainder/10)
      for (let i=0; i<x;i++){
        roman.push("X")
        remainder = remainder -10
      }
    }
    
    if (remainder >= 9) {
      let ix = Math.floor(remainder/9)
      for (let i=0; i<ix;i++){
        roman.push("IX")
        remainder = remainder -9
      }
    }
    
    if (remainder >= 5) {
      let v = Math.floor(remainder/5)
      for (let i=0; i<v;i++){
        roman.push("V")
        remainder = remainder -5
      }
    }
    
    if (remainder >= 4) {
      let iv = Math.floor(remainder/4)
      for (let i=0; i<iv;i++){
        roman.push("IV")
        remainder = remainder -4
      }
    }
    
    if (remainder >= 0) {
      let a = Math.floor(remainder/1)
      for (let i=0; i<a;i++){
        roman.push("I")
        remainder = remainder -1
      }
    }
    
   let finalRoman = roman.join("");
   return finalRoman
  }

  //Testing Suite
  
  console.log(romanNumeralize(11));
  console.log(romanNumeralize(22));
  console.log(romanNumeralize(1000));
  console.log(romanNumeralize(1001));
  console.log(romanNumeralize(1990));
  console.log(romanNumeralize(2007));
  console.log(romanNumeralize(2008));
  console.log(romanNumeralize(59));
  console.log(romanNumeralize(95));
  console.log(romanNumeralize(50));
  console.log(romanNumeralize(45));
  console.log(romanNumeralize(591));
  console.log(romanNumeralize(985));
  console.log(romanNumeralize(519));
  console.log(romanNumeralize(487));
  console.log(romanNumeralize(919));
  console.log(romanNumeralize(999));