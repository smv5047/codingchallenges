//COMPLETED

//Write a function that accepts an array of 10 integers (between 0 and 9), 
//that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    let newPhoneNumber= "("
    for (i=0; i<3; i++) {
    newPhoneNumber= newPhoneNumber + numbers[i]
      }
    newPhoneNumber = newPhoneNumber + ") "
    
    for (i=3; i<6; i++) {
    newPhoneNumber= newPhoneNumber + numbers[i]
      }
    newPhoneNumber = newPhoneNumber + "-"
     for (i=6; i<10; i++) {
    newPhoneNumber= newPhoneNumber + numbers[i]
      }
     
     return newPhoneNumber
  }

//   Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!